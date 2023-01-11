import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Popper } from '~/components/Popper';
import AccountSearch from '~/components/AccountSearch';
import { SearchIcon } from '~/components/Icons/Icon';
import { useDebounce } from '../Hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const debounceValue = useDebounce(searchText, 800);

    const inputRef = useRef();
    const submitBtnRef = useRef();

    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === 'Enter') {
                submitBtnRef.current.click();
            }
        };
        window.addEventListener('keydown', handleEnter);
        return () => window.removeEventListener('keydown', handleEnter);
    }, []);

    useEffect(() => {
        if (!searchText.trim()) {
            setSearchResult([]);
            setLoading(false);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounceValue);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debounceValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchText(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear = () => {
        setSearchText('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const renderSearchResult = () => {
        return (
            <div className={cx('search_result')}>
                <Popper className={cx('popper')}>
                    <h4 className={cx('search_title')}>Accounts</h4>
                    {searchResult.map((data) => {
                        return <AccountSearch key={data.id} data={data} onClick={handleHideResult}/>;
                    })}
                </Popper>
            </div>
        );
    };

    const handleSearch = () => {
        console.log(213);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={renderSearchResult}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchText}
                        spellCheck={false}
                        placeholder="Search account and video"
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchText && !loading && (
                        <button onClick={handleClear} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <div ref={submitBtnRef} onClick={handleSearch} className={cx('search_btn')}>
                        <SearchIcon width="2.4rem" height="2.4rem" className={cx('search_icon')} />
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

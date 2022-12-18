import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
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

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search_title')}>Accounts</h4>
                            {searchResult.map((data) => (
                                <AccountItem key={data.id} data={data} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
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

                    <button className={cx('search_btn')} onMouseDown={handleSubmit}>
                        <SearchIcon width="2.4rem" height="2.4rem" className={cx('search_icon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

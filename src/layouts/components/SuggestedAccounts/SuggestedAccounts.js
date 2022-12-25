import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as SuggestAccountService from '~/services/suggestService';

import SkeletonAccount from '../SkeletonAccount';




const cx = classNames.bind(styles);

function SuggestAccount({ label, currentUser }) {
    const [suggest, setSuggest] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [moreUser, setMoreUser] = useState(5);

    useEffect(() => {
        const fetch = async () => {
            if (seeAll) {
                setIsLoading(true)
                const result = await SuggestAccountService.suggest(0, 20);
                setSuggest(result);
                setIsLoading(false)
            } 
            else {
                const result = await SuggestAccountService.suggest(0, 5);
                setSuggest(result);
            }
        };
        fetch();
    }, [seeAll]);

    useEffect(() => {
        const fetch = async () => {
                setIsLoading(true)
                const result = await SuggestAccountService.suggest(0, moreUser);
                setSuggest(result)
                setIsLoading(false)
        };
        fetch();

    }, [moreUser]);


    const handleSeeMore = () => {
        setMoreUser(prev => {
            let result = prev
            if(suggest.length < 20) {
               result = prev += 5
            } 
            return result
        })
    };

    const handleHideAll = () => {
        setSeeAll(false);
    };

    const handleSeeAll = () => {
        setSeeAll(true)
    };


    const renderAccount = () => {
        return suggest.map((user) => (
            <AccountItem
                key={user.id}
                data={user}
                showPreview
            />
            ))
    }

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            
            {renderAccount()}
            {isLoading && <SkeletonAccount quanlity={1}/>}

            {!seeAll ? (
                <p onClick={ handleSeeAll} className={cx('more_btn')}>
                    {!currentUser && !isLoading &&  'Xem tất cả' }
                </p>
            ) : (
                <p onClick={handleHideAll} className={cx('more_btn')}>
                   Ẩn bớt
                </p>
            )}

            {currentUser && !isLoading ? (
                <p onClick={handleSeeMore} className={cx('more_btn')}>
                    {currentUser && 'Xem thêm'}
                </p>
            ) : (
                <p onClick={handleHideAll} className={cx('more_btn')}>
                    {currentUser && 'Ẩn tất cả'}
                </p>
            )}
        </div>
    );
}

SuggestAccount.protoTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as SuggestAccountService from '~/services/suggestService';
import Seperate from '../../../components/Seperate/Seperate';
import { useDebounce } from '../Hooks';

const cx = classNames.bind(styles);

function SuggestAccount({ label, currentUser, showPreview }) {
    const [suggest, setSuggest] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const [moreUser, setMoreUser] = useState(5)

    useEffect(() => {
        const fetch = async () => {
            if (seeAll) {
                const result = await SuggestAccountService.suggest(0, 20);
                setSuggest(result);
            } 
            else {
                const result = await SuggestAccountService.suggest(0, moreUser);
                setSuggest(result);
            }
        };
        fetch();

    }, [seeAll]);

    useEffect(() => {
        const fetch = async () => {
                const result = await SuggestAccountService.suggest(0, moreUser);
                setSuggest(result);
        };
        fetch();

    }, [moreUser]);


    const renderAccount = () => {
            
        return suggest.map((user) => (
            <AccountItem
                showPreview={showPreview}
                key={user.id}
                img={user.avatar}
                nickName={user.nickname}
                fullName={user.first_name + ' ' + user.last_name}
                tick={user.tick}
                followNumber={user.followers_count}
                likeNumber={user.likes_count}
            />
        ))        
    };

    const handleSeeAll = () => {
        setSeeAll(true)
    }

    const handleSeeLess = () => {
        setSeeAll(false)
    }

    const handleSeeMore = () => {
        setMoreUser(moreUser + 5)
    }
    const handleHideAll = () =>  {
        setSeeAll(false)
    }

    return (
            <div className={cx('wrapper')}>
                <p className={cx('label')}>{label}</p>

                {renderAccount()}

                {!seeAll ? ( <p onClick={handleSeeAll} className={cx('more_btn')}>
                       {!currentUser && 'Xem tất cả'}
                </p>) :
                <p onClick={handleSeeLess} className={cx('more_btn')}>
                        Ẩn bớt
                </p>}

                {currentUser ? ( <p onClick={handleSeeMore} className={cx('more_btn')}>
                        {currentUser && !seeAll && 'Xem thêm'}
                </p>) :
                <p onClick={handleHideAll} className={cx('more_btn')}>
                        { currentUser && 'Ẩn tất cả'}
                </p>}



                {/* {currentUser ? (
                    <p onClick={handleSeeMore} className={cx('more_btn')}>
                        {seeAll ? 'Ẩn bớt' : 'Xem thêm'}
                    </p>
                ) : (
                    <p onClick={handleSeeAll} className={cx('more_btn')}>
                        {seeAll ? 'Ẩn bớt' : 'Xem tất cả'}
                    </p>
                )} */}
            </div>
    );
}

SuggestAccount.protoTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;

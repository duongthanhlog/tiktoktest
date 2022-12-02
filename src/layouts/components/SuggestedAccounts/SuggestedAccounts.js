import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as SuggestAccountService from '~/services/suggestService'

const cx = classNames.bind(styles);

function SuggestAccount({ label, currentUser, showPreview }) {
    const [suggest, setSuggest] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const [moreUser, setMoreUser] = useState(1)

    useEffect(() => {
        const fetch = async () => {
            if(!seeAll) {
                const result = await SuggestAccountService.suggest(moreUser, 5)
                setSuggest(result)
            }
            else {
                const result = await SuggestAccountService.suggest(moreUser, 10)
                setSuggest(result)
            }
        }
        fetch()
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
        ));
    };

    const handleSeeAll = () => {
        console.log(seeAll)
        setSeeAll(!seeAll);
        setMoreUser(moreUser + 1)
    };
    
    const handleSeeMore = () => {
        setMoreUser(moreUser + 1)
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            
            {renderAccount()}

            {currentUser ? ( <p onClick={handleSeeMore} className={cx('more_btn')}>
                {seeAll ? 'Ẩn bớt' :  'Xem thêm'}
            </p>) :
            <p onClick={handleSeeAll} className={cx('more_btn')}>
                {seeAll ? 'Ẩn bớt' :  'Xem tất cả'}
            </p>}
        </div>
    );
}

SuggestAccount.protoTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;

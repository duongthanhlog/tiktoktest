import styles from './SuggestFollowed.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import * as SuggestFollowingAccounts from '~/services/FollowingListService';
import SkeletonAccount from '../../../components/Skeleton/SkeletonAccount';

const cx = classNames.bind(styles);

function SuggestFollowed({ label, moreButton, hideButton, accountsNumber }) {
    const [suggest, setSuggest] = useState([]);
    const [moreUser, setMoreUser] = useState(accountsNumber);
    const [hideLessUser, setHideLessUser] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetch = async () => {
            if(moreUser === 20) {
                setHideLessUser(false)
            }
            setIsLoading(true)
            const result = await SuggestFollowingAccounts.get(0, moreUser);
            setSuggest(result);
            setIsLoading(false)
        };
        fetch();
    }, [moreUser]);

    const handleSeeMore = () => {
        setMoreUser((prev) => prev + 5);
    };

    const handleHideLess = () => {
        setMoreUser(accountsNumber)
        setHideLessUser(true);
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {suggest.map((item) => {
                // return <AccountItem key={item.id} data={item} />;
            })}
            {isLoading && <SkeletonAccount quanlity={1} />}

            {!isLoading || suggest.length > 0 && <p onClick={hideLessUser ? handleSeeMore : handleHideLess} className={cx('more_btn')}>
                {hideLessUser ? moreButton : hideButton}
            </p>}
        </div>
    );
}

export default SuggestFollowed;

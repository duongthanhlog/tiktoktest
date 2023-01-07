import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as SuggestAccountService from '~/services/suggestService';

import SkeletonAccount from '../SkeletonAccount';

const cx = classNames.bind(styles);

function SuggestAccount({ label, currentUser, moreButton, hideButton, showPreview, liveView }) {
    const [suggest, setSuggest] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetch = async () => {
            if (seeAll) {
                setIsLoading(true);
                const result = await SuggestAccountService.suggest(0, 20);
                setSuggest(result);
                setIsLoading(false);
            } else {
                const result = await SuggestAccountService.suggest(0, 5);
                setSuggest(result);
                setIsLoading(false);
            }
        };
        fetch();
    }, [seeAll]);


    const handleHideAll = () => {
        setSeeAll(false);
    };

    const handleSeeAll = () => {
        setSeeAll(true);
    };

    const renderAccount = () => {
        return suggest.map((user) => (
            <AccountItem key={user.id} data={user} showPreview={showPreview} liveView={liveView} />
        ));
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {renderAccount()}
            {isLoading && <SkeletonAccount quanlity={1} />}

            {!seeAll ? (
                <p onClick={handleSeeAll} className={cx('more_btn')}>
                    {!currentUser && !isLoading && moreButton}
                </p>
            ) : (
                <p onClick={handleHideAll} className={cx('more_btn')}>
                    {hideButton}
                </p>
            )}
        </div>
    );
}

SuggestAccount.protoTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;

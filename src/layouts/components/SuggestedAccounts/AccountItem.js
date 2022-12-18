import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/index.js';
import AccountPreview from '~/components/AccountPreview';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ img, nickName, fullName, tick, followNumber, likeNumber, showPreview }) {
    
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                {showPreview && <PopperWrapper className={cx('preview_popper')}>
                    <div className={cx('preview_header')}>
                        <AccountPreview
                            img={img}
                            nickName={nickName}
                            fullName={fullName}
                            tick={tick}
                            followNumber={followNumber}
                            likeNumber={likeNumber}
                        />
                    </div>
                </PopperWrapper>}
            </div>
        );
    };
    return (
        <HeadlessTippy
            interactive
            placement="bottom-start"
            offset={[-10, 5]}
            delay={[700, 0]}
            render={renderPreview}
            appendTo={document.body}
        >
            <Link to={`/@${nickName}`} className={cx('account_item')}>
                <Image alt="" className={cx('avatar')} src={img} />
                <div className={cx('item_info')}>
                    <p className={cx('nick_name')}>
                        <strong>{nickName}</strong>
                        {tick && <FontAwesomeIcon className={cx('tick_icon')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('user_name')}>{fullName}</p>
                </div>
            </Link>
        </HeadlessTippy>
    );
}

export default AccountItem;

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({img, nickName, fullName, tick, followNumber, likeNumber}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src={img}
                    alt=""
                />
                <Button  className={cx('follow_btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('item_info')}>
                    <p className={cx('nick_name')}>
                        <strong>{nickName}</strong>
                        {tick && <FontAwesomeIcon className={cx('tick_icon')} icon={faCheckCircle} />}
                    </p>
                        <p className={cx('user_name')}>{fullName}</p>
                    <div className={cx('analytics')}>
                        <strong className={cx('value')}>{followNumber}</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>{likeNumber}</strong>
                        <span className={cx('label')}>Likes</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';
import { MusicIcon } from '~/components/Icons';

import styles from './UserPost.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Describe() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user_desc')}>
                <div className={cx('user_name')}>
                    <a href='' className={cx('nick_name')}>
                        hoangvinhh <FontAwesomeIcon className={cx('tick_icon')} icon={faCheckCircle} />
                    </a>
                    <p className={cx('full_name')}>Nguyễn Hoàng Vinh</p>
                </div>

                <div className={cx('user_text')}>
                    Mẹ biết mẹ buồn á 😢
                    <a className={cx('hashtag')} href="">
                        <strong>#vinhmc</strong>
                    </a>
                </div>
                <a href="" className={cx('music_info')}>
                    <MusicIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                    <strong>nhạc nền - Bích La nè - Bích La ❤️</strong>
                </a>
            </div>
        </div>
    );
}

export default Describe;

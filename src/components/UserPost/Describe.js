import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';
import { MusicIcon } from '~/components/Icons';

import styles from './UserPost.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

function Describe({ info }) {
    
    const renderPreview = () => {
        return <div className={cx('preview')}>
            <AccountPreview 
                img={info.avatar}
                nickName={info.nickname}
                fullName={info.first_name + ' ' + info.last_name}
                tick={info.tick}
                followNumber={info.followers_count}
                likeNumber={info.likes_count}
            />
            <div className={cx('description')}>follow nhe</div>
        </div>
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user_desc')}>
                <div className={cx('user_name')}>
                    <Tippy
                        interactive
                        placement="bottom-start"
                        offset={[-10, 5]}
                        delay={[700, 0]}
                        render={renderPreview} 
                        appendTo={document.body}
                    >
                        <Link to={`/home`} className={cx('nick_name')}>
                            {info.nickname} <FontAwesomeIcon className={cx('tick_icon')} icon={faCheckCircle} />
                        </Link>
                    </Tippy>

                    <p className={cx('full_name')}>{info.full_name}</p>
                </div>

                <div className={cx('user_text')}>
                    {info.bio}
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

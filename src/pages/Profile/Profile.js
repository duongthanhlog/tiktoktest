import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBan,
    faCircleQuestion,
    faEllipsis,
    faLink,
    faLock,
    faPlay,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { LockIcon, TickIcon } from '~/components/Icons';
import ShareAction from '~/components/ShareAction';
import HeadlessTippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Link, useLocation, useParams } from 'react-router-dom';

import HoverVideoPlayer from 'react-hover-video-player';
import axios from 'axios';
import { Popper } from '~/components/Popper';
import config from '~/config';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function Profile() {
    const reportMenu = [
        {
            icon: <FontAwesomeIcon icon={faFlag} className={cx('icon')} />,
            title: 'Chặn',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faBan} className={cx('icon')} />,
            title: 'Báo cáo',
            to: '/feedback',
        },
    ];

    const { nickname } = useParams();
    const location = useLocation();
    const data = location.state;

    const [user, setUser] = useState(data ?? {});
    const [activeTabs, setActiveTabs] = useState({
        videoTab: true,
        likedTab: false,
    });

    const feedTabsRef = useRef();
    const videoTabRef = useRef();
    const likedTabRef = useRef();
    const lineRef = useRef();

    useEffect(() => {
        const fetch = async () => {
            axios
                .get(`https://tiktok.fullstack.edu.vn/api/users/@${nickname}`)
                .then((response) => response.data.data)
                .then((result) => {
                    setUser(result);
                });
        };
        fetch();
    }, [nickname]);

    const toggleActiveTabs = (e) => {
        switch (e.target) {
            case videoTabRef.current:
                setActiveTabs({ videoTab: true, likedTab: false });
                break;
            case likedTabRef.current:
                setActiveTabs({ videoTab: false, likedTab: true });
                break;
        }
    };

    const handleMouseOverTab = (e) => {
        switch (e.target) {
            case videoTabRef.current:
                lineRef.current.style = `left :${videoTabRef.current.offsetLeft}px ;`;
                break;
            case likedTabRef.current:
                lineRef.current.style = `left :${likedTabRef.current.offsetLeft}px ;`;
                break;
        }
    };

    const handleMouseOutTab = (e) => {
        if (activeTabs.videoTab) {
            lineRef.current.style = `left :${videoTabRef.current.offsetLeft}px ;`;
        } else if (activeTabs.likedTab) {
            lineRef.current.style = `left :${likedTabRef.current.offsetLeft}px ;`;
        }
    };

    useEffect(() => {
        feedTabsRef.current?.addEventListener('mouseover', handleMouseOverTab);
        feedTabsRef.current?.addEventListener('mouseout', handleMouseOutTab);
        return () => {
            window.removeEventListener('mouseover', handleMouseOverTab);
            window.removeEventListener('mouseout', handleMouseOutTab);
        };
    });

    const renderProfile = () => {
        return (
            <>
                <div className={cx('info_container')}>
                    <div className={cx('basic')}>
                        <Image className={cx('avatar')} src={user?.avatar} alt={user?.nickname} />
                        <div className={cx('names_wrap')}>
                            <h2 className={cx('nick_name')}>
                                {user?.nickname}
                                {user.tick && <TickIcon className={cx('tick_icon')} />}
                            </h2>
                            <p className={cx('full_name')}>
                                {(user?.first_name + ' ' + user?.last_name).trim() || user?.nickname}
                            </p>
                            <Button className={cx('button')} primary>
                                Follow
                            </Button>
                        </div>
                    </div>
                    <div className={cx('counts')}>
                        <div className={cx('counts_info')}>
                            <div className={cx('count')}>
                                <strong className={cx('number')}>{user?.followings_count}</strong>
                                <span className={cx('title')}>Đang follow</span>
                            </div>
                            <div className={cx('count')}>
                                <strong className={cx('number')}>{user?.followers_count}</strong>
                                <span className={cx('title')}>Follower</span>
                            </div>
                            <div className={cx('count')}>
                                <strong className={cx('number')}>{user?.likes_count}</strong>
                                <span className={cx('title')}>Thích</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bio')}>{user?.bio}</div>
                    <a href="/" className={cx('link')}>
                        <FontAwesomeIcon icon={faLink} />
                        <span>{user?.facebook_url}</span>
                    </a>

                    <div className={cx('option_area')}>
                        <ShareAction className={cx('share_profile-list')} delay={[0, 100]}>
                            <span className={cx('share_btn')}>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                        </ShareAction>
                        <Menu items={reportMenu} className={cx('options_wrap')}>
                            <span className={cx('more_btn')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                        </Menu>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div ref={feedTabsRef} onClick={toggleActiveTabs} className={cx('feed_tabs')}>
                        <div ref={videoTabRef} className={cx('tab', { active: activeTabs.videoTab })}>
                            Video
                        </div>
                        <div ref={likedTabRef} className={cx('tab', { active: activeTabs.likedTab })}>
                            <FontAwesomeIcon className={cx('lock_icon')} icon={faLock} />
                            Đã thích
                        </div>
                        <div className={cx('line_wrap')}>
                            <div ref={lineRef} className={cx('line')}></div>
                        </div>
                    </div>
                    {activeTabs.videoTab ? (
                        <div className={cx('videos_container')}>
                            <Link to={config.routes.video} className={cx('video_wrap')}>
                                <HoverVideoPlayer
                                    videoClassName={cx('video')}
                                    videoSrc={data.popular_video?.file_url || ''}
                                    videoStyle={{
                                        width: 208,
                                        objectFit: 'cover',
                                        borderRadius: 6,
                                    }}
                                    loop
                                    restartOnPaused
                                />
                                <div className={cx('views')}>
                                    {data.popular_video && <FontAwesomeIcon icon={faPlay} />}
                                    <strong>{data.popular_video?.views_count}</strong>
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div className={cx('liked_container')}>
                            <div>
                                <LockIcon width="9rem" height="9rem" className={cx('lock_icon')} />
                            </div>
                            <div className={cx('title')}>Video đã thích của người dùng này ở trạng thái riêng tư</div>
                            <div className={cx('description')}>
                                Các video được thích bởi {user.nickname} hiện đang ẩn
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    };

    return <div className={cx('wrapper')}>{renderProfile()}</div>;
}

export default Profile;

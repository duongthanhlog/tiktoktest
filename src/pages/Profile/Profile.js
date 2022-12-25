import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faEllipsis, faLink, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ShareIcon } from '~/components/Icons';
import ShareAction from '~/components/ShareAction';
import HeadlessTippy from '@tippyjs/react/headless';

import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import { useLocation, useParams } from 'react-router-dom';

import * as ProfileService from '~/services/ProfileService';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

function Profile() {
    const location = useLocation();
    const data = location.state
    
    const [info, setInfo] = useState({});

    const [activeTabs, setActiveTab] = useState({
        active1: true,
        active2: false,
    });

    const feedTabsRef = useRef();
    const videoTabRef = useRef();
    const likedTabRef = useRef();
    const lineRef = useRef();

    useEffect(() => {
        const fetch = async () => {
            const result = await ProfileService.profile(`${data.nickname}`);
            setInfo(result)
        };
        fetch();
    }, [data.nickname]);
    

    const toggleActiveTabs = (e) => {
        switch (e.target) {
            case videoTabRef.current:
                setActiveTab({ active1: true, active2: false });
                break;
            case likedTabRef.current:
                setActiveTab({ active1: false, active2: true });
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
        if (activeTabs.active1) {
            lineRef.current.style = `left :${videoTabRef.current.offsetLeft}px ;`;
        } else if (activeTabs.active2) {
            lineRef.current.style = `left :${likedTabRef.current.offsetLeft}px ;`;
        }
    };

    useEffect(() => {
        feedTabsRef.current.addEventListener('mouseover', handleMouseOverTab);
        feedTabsRef.current.addEventListener('mouseout', handleMouseOutTab);
        return () => {
            window.removeEventListener('mouseover', handleMouseOverTab);
            window.removeEventListener('mouseout', handleMouseOutTab);
        };
    });


    return (
        <div className={cx('wrapper')}>
            <div className={cx('info_container')}>
                <div className={cx('basic')}>
                    <Image className={cx('avatar')} src={info.avatar} />
                    <div className={cx('names_wrap')}>
                        <h2 className={cx('nick_name')}>{info.first_name + ' ' + info.last_name}</h2>
                        <p className={cx('full_name')}>{info.nickname}</p>
                        <Button className={cx('button')} primary>
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx('counts')}>
                    <div className={cx('counts_info')}>
                        <div className={cx('count')}>
                            <strong className={cx('number')}>{info.followings_count}</strong>
                            <span className={cx('title')}>Đang follow</span>
                        </div>
                        <div className={cx('count')}>
                            <strong className={cx('number')}>{info.followers_count}</strong>
                            <span className={cx('title')}>Follower</span>
                        </div>
                        <div className={cx('count')}>
                            <strong className={cx('number')}>{info.likes_count}</strong>
                            <span className={cx('title')}>Thích</span>
                        </div>
                    </div>
                </div>
                <div className={cx('bio')}>{info.bio}</div>
                <a href="/" className={cx('link')}>
                    <FontAwesomeIcon icon={faLink} />
                    <span>{info.facebook_url}</span>
                </a>

                <div className={cx('option_area')}>
                    <ShareAction placement="bottom-end" delay={[0, 100]}>
                        <span className={cx('share_btn')}>
                            <ShareIcon width="2.4rem" height="2.4rem" />
                        </span>
                    </ShareAction>
                    <HeadlessTippy
                        appendTo={document.body}
                        interactive
                        placement="bottom-end"
                        render={() => {
                            return (
                                <Menu>
                                    <div className={cx('more_options')}>
                                        <div className={cx('option')}>
                                            <FontAwesomeIcon icon={faFlag} />
                                            <span>Báo cáo</span>
                                        </div>
                                        <div className={cx('option')}>
                                            <FontAwesomeIcon icon={faBan} />
                                            <span>Chặn</span>
                                        </div>
                                    </div>
                                </Menu>
                            );
                        }}
                    >
                        <span className={cx('more_btn')}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                    </HeadlessTippy>
                </div>
            </div>
            <div className={cx('video_container')}>
                <div ref={feedTabsRef} onClick={toggleActiveTabs} className={cx('feed_tabs')}>
                    <div ref={videoTabRef} className={cx('tab', { active: activeTabs.active1 })}>
                        Video
                    </div>
                    <div ref={likedTabRef} className={cx('tab', { active: activeTabs.active2 })}>
                        <FontAwesomeIcon className={cx('lock_icon')} icon={faLock} />
                        Đã thích
                    </div>
                    <div className={cx('line_wrap')}>
                        <div ref={lineRef} className={cx('line')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

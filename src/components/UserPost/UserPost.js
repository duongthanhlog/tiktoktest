import { useRef, useState, useEffect, useContext, useLayoutEffect } from 'react';
import classNames from 'classnames/bind';

import { faPause, faPlay, faCommentDots, faHeart, faShare, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/components/Image';
import ActionButton from '../ActionButton/ActionButton';

import styles from './UserPost.module.scss';
import AccountPreview from '../AccountPreview';
import ShareAction from '../ShareAction';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MusicIcon, MuteIcon, TickIcon, UnmuteIcon } from '~/components/Icon';
import { Link } from 'react-router-dom';

import Button from '../Button';
import HeadlessTippy from '@tippyjs/react/headless';
import ProcessVolumn from '../ProcessVolumn';
import config from '~/config';
import VideoItem from './VideoItem';
import { Popper } from '../Popper';
import Description from '../Description';

const cx = classNames.bind(styles);

function UserPost({ data }) {
    const storageVolume = localStorage.getItem('volumeValue') ?? 0;

    const [playing, setPlaying] = useState(false);
    const [mute, setMute] = useState(true);
    const [volumeValue, setVolumeValue] = useState(0);

    const videoRef = useRef();
    const shareAcctionRef = useRef();

    const togglePlayVideo = () => {
        if (playing) {
            pauseVideo();
        } else {
            playVideo();
        }
    };

    const toggleMute = (e) => {
        setMute(!mute);
    };

    const playVideo = () => {
        videoRef.current.play();
        setPlaying(true);
    };

    const pauseVideo = () => {
        videoRef.current.pause();
        setPlaying(false);
    };

    function playVideoWhenScroll() {
        const bounding = videoRef.current.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            playVideo();
        } else {
            pauseVideo();
            videoRef.current.currentTime = 0;
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', playVideoWhenScroll);
        return () => {
            window.removeEventListener('scroll', playVideoWhenScroll);
        }
    });

    useEffect(() => {
        if (mute) {
            setVolumeValue(0);
        } else {
            setVolumeValue(storageVolume);
        }
    }, [mute]);

    const renderPreviewAccount = () => {
        return (
            <Popper>
                <AccountPreview data={data.user} haveFooter />
            </Popper>
        );
    };

    return (
        <div className={cx('post')}>
            <HeadlessTippy
                appendTo={document.body}
                interactive
                placement="bottom-start"
                delay={[800, 100]}
                render={renderPreviewAccount}
            >
                <Link className={cx('link_img')} to={config.routes.profileLink(data.user.nickname)} state={data.user}>
                    <Image className={cx('user_img')} src={data.user.avatar} />
                </Link>
            </HeadlessTippy>

            <div className={cx('content')}>
                <div className={cx('desc_wrap')}>
                    <div className={cx('user_desc')}>
                        <div className={cx('user_name')}>
                            <HeadlessTippy
                                appendTo={document.body}
                                interactive
                                placement="bottom-start"
                                delay={[800, 100]}
                                render={renderPreviewAccount}
                            >
                                <Link
                                    to={config.routes.profileLink(data.user.nickname)}
                                    className={cx('nick_name')}
                                    state={data.user}
                                >
                                    {data.user.nickname}
                                    {data.user.tick && <TickIcon className={cx('tick_icon')}/>}
                                </Link>
                            </HeadlessTippy>
                            <Link to={config.routes.profileLink(data.user.nickname)} state={data.user} className={cx('full_name')}>{data.user.first_name + ' ' + data.user.last_name}</Link>
                        </div>
                        <Description text={data.description} hashtag={data.allows}/>
                        <a href="/" className={cx('music_info')}>
                            <MusicIcon className={cx('icon')} width="1.6rem" height="1.6rem" />
                            <strong>{data.music || 'Music ❤️'}</strong>
                        </a>
                    </div>
                    <Button primary outline className={cx('button')}>
                        Theo dõi
                    </Button>
                </div>

                <div className={cx('video_wrap')}>
                    <div className={cx('wrapper')}>
                        <button className={cx('report_btn')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faFlag} />
                            <span>Báo cáo</span>
                        </button>

                        <VideoItem
                            loop
                            ref={videoRef}
                            className={cx('video')}
                            src={data.file_url || data.thumb_url}
                            poster={data.thumb_url}
                        />

                        <div className={cx('video_controls')}>
                            <button onClick={togglePlayVideo} className={cx('control_btn')}>
                                {playing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                            </button>

                            <HeadlessTippy
                                interactive
                                placement="top-end"
                                hideOnClick={false}
                                render={() => {
                                    return (
                                        <ProcessVolumn
                                            setVolumeValue={setVolumeValue}
                                            volumeValue={volumeValue}
                                            setMute={setMute}
                                            videoRef={videoRef}
                                        />
                                    );
                                }}
                            >
                                <div className={cx('volumn_wrap')}>
                                    <div onClick={toggleMute} className={cx('volumn_types', { mute: mute })}>
                                        {!mute ? (
                                            <UnmuteIcon width="2.4rem" height="2.4rem" className={cx('unmute_icon')} />
                                        ) : (
                                            <MuteIcon width="2.4rem" height="2.4rem" className={cx('mute_icon')} />
                                        )}
                                    </div>
                                </div>
                            </HeadlessTippy>
                        </div>
                    </div>

                    <div className={cx('actions')}>
                        <ActionButton className={cx('liked_icon')} type={faHeart} mount={data.likes_count} />
                        <ActionButton to={config.routes.video} type={faCommentDots} mount={data.comments_count} />
                        <ShareAction>
                            <ActionButton ref={shareAcctionRef} type={faShare} mount={data.shares_count} />
                        </ShareAction>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPost;

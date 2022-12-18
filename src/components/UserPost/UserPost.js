import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect, useContext } from 'react';

import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Describe from './Describe';
import Image from '~/components/Image';
import VideoItem from './VideoItem';
import Button from '~/components/Button';
import video from '~/assests/video';
import ActionButton from '../ActionButton/ActionButton';

import styles from './UserPost.module.scss';
import classNames from 'classnames/bind';

import AccountPreview from '../AccountPreview';

import VolumeAction from '../VolumeAction/VolumeAction';
import { UserCurrentContext } from '~/Provider';
import HeadlessTippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserPost({info}) {
    const {currentUser} = useContext(UserCurrentContext)
    const [playing, setPlaying] = useState(false);
    const [liked, setLiked] = useState(false)

    const videoRef = useRef();
    const videoWrapRef = useRef();

    const handleChangePlay = () => {
       setPlaying(!playing);
    };

    const toggleLiked = () => {
        if(currentUser) {
            setLiked(!liked)
        }
    }

    useEffect(() => {
        if (playing) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }

    }, [playing]);


    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 100) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        });
    }, []);


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
            <p className={cx('description')}>Theo dõi tôi ngay tại {info.website_url}</p>
        </div>
    }

    return (
        <div className={cx('post')}>
            <HeadlessTippy
                  interactive
                  placement="bottom-start"
                  offset={[-10, 5]}
                  delay={[700, 0]}
                  render={renderPreview} 
                  appendTo={document.body}  
            >
                    <a className={cx('link_img')} href="/">
                        <Image
                            className={cx('user_img')}
                            src={info.avatar}
                        />
                    </a>
            </HeadlessTippy>
            <div ref={videoWrapRef} className={cx('content')}>
                <Describe info={info}/>
                <div className={cx('video_wrap')}>
                    <VideoItem
                        loop
                        autoPlay
                        playing={playing}
                        ref={videoRef}
                        src={video}
                        className={cx('video')}
                        handleChangePlay={handleChangePlay}
                        muted='muted'
                    >
                        <div className={cx('video_controls')}>
                            <button onClick={handleChangePlay} className={cx('control_btn')}>
                                {playing && <FontAwesomeIcon className={cx('pause_btn')} icon={faPause} />}
                                {!playing && <FontAwesomeIcon className={cx('play_btn')} icon={faPlay} />}
                            </button>
                            <VolumeAction className={cx('hide')} videoRef={videoRef}/>
                        </div>
                    </VideoItem>

                    <div className={cx('actions')}>
                        <ActionButton className={cx('liked_icon', {liked})} onClick={currentUser ? toggleLiked : () => {}} type={faHeart} mount="284.4k" />
                        <ActionButton type={faCommentDots} mount="24.4k" />
                        <ActionButton type={faShare} mount="12k" />
                    </div>
                </div>
            </div>
            <Button primary outline small className={cx('button')}>
                Follow
            </Button>
        </div>
    );
}

export default UserPost;

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

import VolumeAction from '../VolumeAction';
import { UserCurrentContext } from '~/Provider';

const cx = classNames.bind(styles);

function UserPost() {
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
                setPlaying(true);
            } else {
                setPlaying(false);
            }
        });
    }, []);




    return (
        <div className={cx('post')}>
            <Image
                className={cx('user_img')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dab2fbac6d703a59107ed7cac91d09be.jpeg?x-expires=1670324400&x-signature=eGwPCSzqWa8ss5zknXmczy%2F8OC0%3D"
            />
            <div ref={videoWrapRef} className={cx('content')}>
                <Describe />
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
                            <VolumeAction videoRef={videoRef}/>
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

import axios from 'axios';
import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';

import styles from './Following.module.scss';
import * as FollowingService from '~/services/postService';
import SkeletonFollowing from '~/layouts/components/SkeletonFollowing';
import HoverVideoPlayer from 'react-hover-video-player';
import { UserCurrentContext } from '~/Provider';
import config from '~/config';

const cx = classNames.bind(styles);

function Following() {
    const {currentUser} = useContext(UserCurrentContext)
    const [isLoading, setIsLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(0);
    

    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            if (page >= 3) {
                setIsLoading(false);
            } 
            else{
                const result = await FollowingService.post('for-you', page);
                setVideos((prev) => [...prev, result]);
            }
            setIsLoading(false);
        };
        fetchApi();
    }, [page]);

    useEffect(() => {
        const handleScrollLoadMore = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setPage(page + 1);
            }
        };
        window.addEventListener('scroll', () => {
            handleScrollLoadMore();
        });
        return () => window.removeEventListener('scroll', handleScrollLoadMore);
    });

    const handlePreventClickTheLink = (e) => {
        if (e.target.className.match('button')) {
            e.preventDefault();
        }
    };

    return (
        <div className={cx('wrapper')}>
            {!currentUser && videos.map((items) => {
                return items.map((video) => {
                    return (
                        <div key={video.uuid} className={cx('user_wrap')}>
                            <Link
                                onClick={handlePreventClickTheLink}
                                className={cx('link')}
                                to={`${config.routes.profile}`}
                                state={video.user}
                            >
                                <HoverVideoPlayer
                                    key={video.uuid}
                                    videoSrc={video.file_url}
                                    videoStyle={{
                                        height: '100%',
                                        borderRadius: 10,
                                    }}
                                    hoverOverlay={
                                        <div className={cx('button_wrap')}>
                                            <Button primary className={cx('button')}>
                                                <span>Follow</span>
                                            </Button>
                                        </div>
                                    }
                                    pausedOverlay={<Image className={cx('img_preview')} src={video.thumb_url} />}
                                    className={cx('video_wrap')}
                                    restartOnPaused
                                    disablePictureInPicture
                                />
                            </Link>
                            <div className={cx('body')}>
                                <div className={cx('info')}>
                                    <Image src={video.user.avatar} className={cx('avatar')} />
                                    <p className={cx('nick_name')}>{video.user.nickname}</p>
                                    <p className={cx('full_name')}>
                                        {video.user.first_name + ' ' + video.user.last_name}
                                    </p>
                                </div>
                                <Button primary className={cx('button_pointer-none')}>
                                    <span>Follow</span>
                                </Button>
                            </div>
                        </div>
                    );
                });
            })}
            {isLoading && <SkeletonFollowing quanlity={15} />}
        </div>
    );
}

export default Following;

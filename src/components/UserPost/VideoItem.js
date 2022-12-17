import styles from './UserPost.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

import { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';

const cx = classNames.bind(styles);

const VideoItem = forwardRef(({
         children, 
         src, 
         className, 
         handleChangePlay, 
         handleChangeMute, 
         playing, 
         ...props 
      }, ref) => {

    const videoRef = useRef();    
    
    useImperativeHandle(
        ref,
        () => {
            return {
                changeVolume(value) {
                    videoRef.current.volume = value
                },
                play() {
                    videoRef.current.play();
                },
                pause() {
                    videoRef.current.pause();
                },
                unMute() {
                  videoRef.current.muted = false
                },
                mute() {
                  videoRef.current.muted = true
                }
            };
        },
        [],
    );

    const classes = cx('wrapper', className);
    return (
        <div className={classes}>
            <button className={cx('report_btn')}>
                <FontAwesomeIcon className={cx('icon')} icon={faFlag} />
                <span>Báo cáo</span>
            </button>
            <video ref={videoRef} className={cx('video')} src={src} {...props}/>
            {children}
        </div>
    );
});

export default VideoItem;

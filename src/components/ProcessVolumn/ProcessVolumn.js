import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './ProcessVolumn.module.scss';
import classNames from 'classnames/bind';
import { UseLocalStorage } from '~/layouts/components/Hooks';

const cx = classNames.bind(styles);

const ProcessVolumn = ({ className, setMute, volumeValue, videoRef, setVolumeValue, children }) => {
    const inputVolumeRef = useRef();

    useEffect(() => {
        inputVolumeRef.current.style = `background-image: linear-gradient(to right, white ${volumeValue}%, gray ${volumeValue}%);`;
        let volumePercent = volumeValue / 100;
        videoRef.current.volume = volumePercent;
        videoRef.current.muted = false;
    }, [volumeValue]);


    function handleChange(e) {
        let volumeValue = parseInt(e.target.value);
        setVolumeValue(volumeValue);
        UseLocalStorage('volumeValue', volumeValue);
        if(volumeValue === 0) {
            setMute(true)
        }
        else {
            setMute(false)
        }
    }

    const classes = cx('wrapper', className);

    return (
        <div className={classes}>
            <input
                type="range"
                min="0"
                max="100"
                value={volumeValue}
                ref={inputVolumeRef}
                onInput={handleChange}
                className={cx('process')}
            />
        </div>
    );
};

export default ProcessVolumn;

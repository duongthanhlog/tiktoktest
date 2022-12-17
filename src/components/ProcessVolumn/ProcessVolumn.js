import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './ProcessVolumn.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const  ProcessVolumn = ({ className, videoRef, setMute, mute, value, setValue }, ref) => {
    
    const inputVolumeRef = useRef();
    
    useImperativeHandle(ref, () => {
        return {
            value,
            setValue
        }
    })
   
    useEffect(() => {
        inputVolumeRef.current.style = `background-image: linear-gradient(to right, white ${value}%, gray ${value}%);`
        
    }, [value])

        
    function handleChange(e) {
        let volumeValue = e.target.value 
        let volumePercent = volumeValue / 100
        videoRef.current.changeVolume(volumePercent)
        videoRef.current.unMute()
        setValue(volumeValue)
        setMute(false)
        if(volumeValue === '0') {
            setMute(true)
        }
    };

    const classes = cx('wrapper', className);

    return (
        <div className={classes}>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                ref={inputVolumeRef}
                onInput={handleChange}
                className={cx('process')}
            />
        </div>
    );
}

export default forwardRef(ProcessVolumn);

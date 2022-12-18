import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './ProcessVolumn.module.scss';
import classNames from 'classnames/bind';
import UseLocalStorage from '~/layouts/components/Hooks/UseLocalStorage';

const cx = classNames.bind(styles);

const  ProcessVolumn = ({ className, videoRef, setMute, value, setValue, setPrevVolume }, ref) => {

    const inputVolumeRef = useRef();
    
    useImperativeHandle(ref, () => {
        return {
            value,
            setValue
        }
    })
   
    useEffect(() => {
        inputVolumeRef.current.style = `background-image: linear-gradient(to right, white ${value}%, gray ${value}%);`
        let volumePercent = value / 100
        videoRef.current.changeVolume(volumePercent)
        videoRef.current.unMute()
    }, [value])

        
    function handleChange(e) {
        let volumeValue = parseInt(e.target.value)
        UseLocalStorage('volumeValue', volumeValue)
        setValue(volumeValue)

        if(volumeValue > 0) {
            setPrevVolume(volumeValue)
            setMute(false)
        }
        else {
            setPrevVolume(0)
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

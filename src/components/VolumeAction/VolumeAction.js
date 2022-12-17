import styles from './VolumeAction.module.scss';
import classNames from 'classnames/bind';
import { MuteIcon, UnmuteIcon } from '../Icons';
import ProcessVolumn from '../ProcessVolumn';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function VolumeAction({ videoRef }) {
    const [mute, setMute] = useState(true);
    const [value, setValue] = useState(0)


    const inputVolumeRef = useRef()
    
    const toggleMute = () => {
        setMute(!mute)  
    };

    useEffect(() => {
        if(!mute) {
            setValue(50)
            videoRef.current.unMute()
        }
        else {
            setValue(0)
            videoRef.current.mute()
        }
    }, [mute])

    return (
        <div className={cx('volumn_wrap')}>
            <Tippy
                interactive
                visible
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <ProcessVolumn 
                            ref={inputVolumeRef} 
                            setMute={setMute} 
                            setValue={setValue}
                            value={value}
                            mute={mute}
                            videoRef={videoRef} 
                            className={cx('process')} 
                        />
                    </div>
                )}
                placement="top-start"
            >
                <button onClick={toggleMute} className={cx('volumn_types')}>
                    {!mute && <UnmuteIcon width="2.9rem" height="2.9rem" className={cx('volume_icon')} />}
                    {mute && <MuteIcon width="2.9rem" height="2.9rem" className={cx('volume_icon')} />}
                </button>
            </Tippy>
        </div>
    );
}

export default VolumeAction;

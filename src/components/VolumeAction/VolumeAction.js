import styles from './VolumeAction.module.scss';
import classNames from 'classnames/bind';
import { MuteIcon, UnmuteIcon } from '../Icons';
import ProcessVolumn from '../ProcessVolumn';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function VolumeAction({ videoRef, className }) {
    const storageVolumne = localStorage.getItem('volumeValue')
    
    const [mute, setMute] = useState(true);
    const [value, setValue] = useState(0)
    const [prevVolume, setPrevVolume] = useState(storageVolumne)

    const inputVolumeRef = useRef()
    
    const toggleMute = () => {
        setMute(!mute)  
    };

    useEffect(() => {
        if(!mute) {
            setValue(prevVolume)
            videoRef.current.unMute()
        }
        else {
            setValue(0)
            videoRef.current.mute()
        }
    }, [mute])
    
    const unmuteClass = cx('unmute_icon', className)

    return (
        <div className={cx('volumn_wrap')}>
            <Tippy
                interactive
                hideOnClick={false}
                delay={[0, 4]}
                offset={[47, -8]}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <ProcessVolumn 
                            ref={inputVolumeRef} 
                            setPrevVolume={setPrevVolume}
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
                <button onClick={toggleMute} className={cx('volumn_types', { mute : !mute })}>
                    {!mute && <UnmuteIcon width="2.4rem" height="2.4rem" className={unmuteClass} />}
                    {mute && <MuteIcon width="2.4rem" height="2.4rem" className={cx('mute_icon')} />}
                </button>
            </Tippy>
        </div>
    );
}

export default VolumeAction;

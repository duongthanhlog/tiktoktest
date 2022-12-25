import styles from './Video.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Video() {
    return ( 
        <div className={cx('wrapper')}>Video page</div>
     );
}

export default Video;
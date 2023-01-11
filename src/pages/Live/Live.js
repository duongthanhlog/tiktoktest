import classNames from "classnames/bind";
import Skeleton from "react-loading-skeleton";
import styles from './Live.module.scss'

const cx = classNames.bind(styles)

function Live() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('live_box')}>LIVE</div>
                <Skeleton className={cx('line')} count={1} width={200} height={20}/>
                <Skeleton className={cx('line')} count={1} width={200} height={20}/>
            </div>
        </div>
     );
}

export default Live;
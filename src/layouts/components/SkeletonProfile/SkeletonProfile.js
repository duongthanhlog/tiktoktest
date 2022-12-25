import styles from './SkeletonProfile.module.scss'
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles)

function SkeletonProfile() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('d-flex')}>
                <Skeleton circle width={118} height={118}/>
            </div>
            <div className={cx('lines')}>
                <Skeleton className={cx('line')} count={1} width={300} height={24}/>
                <Skeleton className={cx('line')} count={1} width={200}/>
            </div>
        </div>
    );
}

export default SkeletonProfile;
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';
import styles from './SkeletonFollowing.module.scss';

const cx = classNames.bind(styles);
function SkeletonFollowing({ quanlity }) {
    return Array(quanlity)
        .fill(0)
        .map((s, index) => {
            return (
                <div key={index} className={cx('wrapper')}>
                    <Skeleton className={cx('item')} count={1} width={226} height={302} />
                </div>
            );
        });
}

export default SkeletonFollowing;

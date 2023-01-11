import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';
import styles from './SkeletonPost.module.scss';

const cx = classNames.bind(styles);

function SkeletonPost({ quanlity }) {
    return Array(quanlity)
        .fill(0)
        .map((p, index) => (
            <div key={index} className={cx('wrapper')}>
                <Skeleton className={cx('circle')} circle width={56} height={56} />
                <div className={cx('d-flex')}>
                    <div className={cx('wrap1')}>
                        <Skeleton className={cx('line1')} count={1} width={200} />
                        <Skeleton className={cx('line2')} count={1} width={100} />
                    </div>
                    <Skeleton count={2} width={500} />
                </div>
            </div>
        ));
}

export default SkeletonPost;

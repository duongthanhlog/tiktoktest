import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './SkeletonAccount.module.scss';

const cx = classNames.bind(styles);

function SkeletonElement({ quanlity }) {
    return Array(quanlity)
        .fill(0)
        .map((s, index) => (
            <div key={index} className={cx('wrapper')}>
                <Skeleton className={cx('circle')} circle count={1} height={32} width={32} />
                <div className={cx('lines')}>
                    <Skeleton className={cx('line1')} count={1} height={10} width={110} />
                    <Skeleton className={cx('line2')} count={1} height={10} width={50} />
                </div>
            </div>
        ));
}

export default SkeletonElement;

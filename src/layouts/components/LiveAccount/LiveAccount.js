import styles from './LiveAccount.module.scss'
import classNames from 'classnames/bind';
import SkeletonAccount from '../../../components/Skeleton/SkeletonAccount';

const cx = classNames.bind(styles)

function LiveAccount({ label }) {
    return (  
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <SkeletonAccount count={1}/>
        </div>
    );
}

export default LiveAccount;
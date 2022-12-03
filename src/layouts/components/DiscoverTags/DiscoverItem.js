import classNames from 'classnames/bind';
import styles from './DiscoverTags.module.scss';

const cx = classNames.bind(styles);

function DiscoverItem({title, icon}) {
    
    return (
        <div>
            {icon}
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default DiscoverItem;

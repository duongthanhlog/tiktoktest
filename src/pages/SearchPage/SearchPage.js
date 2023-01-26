import styles from './SearchPage.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function SearchPage() {
    return ( 
        <div className={cx('wrapper')}></div>
     );
}

export default SearchPage;
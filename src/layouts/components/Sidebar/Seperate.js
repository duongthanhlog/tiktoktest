import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Seperate() {
    return ( 
        <div className={cx('seperate')}></div>
     );
}

export default Seperate;
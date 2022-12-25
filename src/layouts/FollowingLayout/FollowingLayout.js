import classNames from 'classnames/bind'
import Header from '../components/Header';
import SideBar from "../components/Sidebar";
import styles from './FollowingLayout.module.scss'

const cx = classNames.bind(styles)

function FollowingLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <SideBar hideSuggestFollowing/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default FollowingLayout;
import classNames from 'classnames/bind';
import Seperate from '../Sidebar/Seperate';
import styles from './SidebarFooter.module.scss';

const cx = classNames.bind(styles);


function SidebarFooter() {
    return ( 
        <div>
            <Seperate/>
            <div className={cx('wrapper')}>
                <div className={cx('link_wrap')}>
                    <a href="">Giới thiệu</a>
                    <a href="">Bản tin</a>
                    <a href="">Giới thiệu</a>
                    <a href="">Giới thiệuasdasdds</a>
                    <a href="">Giới thiệuasdasdds</a>
                    <a href="">Giới thiệuasdasdds</a>
                    <a href="">Giới thiệu</a>
                </div>
                <div className={cx('link_wrap')}>
                    <a href="">Giới thiệu</a>
                    <a href="">Bản tin</a>
                    <a href="">Giới thiệu</a>
                    <a href="">Giới thiệu</a>
                    <a href="">Giới thiệu</a>
                </div>
                <div className={cx('link_wrap')}>
                    <a href="">Giới thiệu</a>
                    <a href="">Bản tin</a>
                    <a href="">Giới thiệu</a>
                    <a href="">Giới thiệu</a>
                    <a href="">Giới thiệu</a>
                </div>
                <div className={cx('poppup_more')}>Thêm</div>
                <div className={cx('coppyright')}>© 2022 TikTok</div>
            </div>
        </div>
    );
}

export default SidebarFooter;
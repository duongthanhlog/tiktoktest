import classNames from 'classnames/bind';
import Seperate from '../../../components/Seperate/Seperate';
import styles from './SidebarFooter.module.scss';

const cx = classNames.bind(styles);


function SidebarFooter() {
    return ( 
            <div className={cx('wrapper')}>
                <div className={cx('link_wrap')}>
                    <a href="">Giới thiệu</a>
                    <a href="">Bản tin</a>
                    <a href="">Liên hệ</a>
                    <a href="">Sự nghiệp</a>
                    <a href="">Byte Dance</a>
                </div>
                <div className={cx('link_wrap')}>
                    <a href="">TikTok for Good</a>
                    <a href="">Quảng cáo</a>
                    <a href="">Developer</a>
                    <a href="">Transparentcy</a>
                    <a href="">TikTok Rewards</a>
                    <a href="">TikTok Browse</a>
                    <a href="">TikTok Embeds</a>
                </div>
                <div className={cx('link_wrap')}>
                    <a href="">Trợ giúp</a>
                    <a href="">An toàn</a>
                    <a href="">Điều khoản</a>
                    <a href="">Quyền riêng tư</a>
                    <a href="">Creator Portal</a>
                    <a href="">Hướng dẫn cộng đồng</a>
                </div>
                <div className={cx('poppup_more')}>Thêm</div>
                <div className={cx('coppyright')}>© 2022 TikTok</div>
            </div>
    );
}

export default SidebarFooter;
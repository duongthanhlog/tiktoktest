import classNames from "classnames/bind";
import images from "~/assests/images";
import Image from "~/components/Image";
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('logo')}>
                    <Image className={cx('logo')} src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg'/>
                    <Image className={cx('logo_name')} src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg'/>
                </div>
                <div className={cx('content')}>
                    <h4>Công ty</h4>
                    <a href='/'>Giới thiệu</a>
                    <a href='/'>Bản tin</a>
                    <a href='/'>Liên hệ</a>
                    <a href='/'>Sụ nghiệp</a>
                    <a href='/'>ByteDance</a>
                </div>
                <div className={cx('content')}>
                    <h4>Chương trình</h4>
                    <a href='/'>TikTok for Good</a>
                    <a href='/'>Quảng cáo</a>
                    <a href='/'>Developers</a>
                    <a href='/'>TikTok Rewards</a>
                    <a href='/'>TikTok Browse</a>
                    <a href='/'>TikTok Embeds</a>
                </div>
                <div className={cx('content')}>
                    <h4>Hỗ trợ</h4>
                    <a href='/'>Trung tâm trợ giúp</a>
                    <a href='/'>Trung tâm an toàn</a>
                    <a href='/'>Creator Portal</a>
                    <a href='/'>Hướng dẫn Cộng đồng</a>
                    <a href='/'>Minh bạch</a>
                    <a href='/'>Accessibility</a>
                </div>
                <div className={cx('content')}>
                    <h4>Pháp lý</h4>
                    <a href='/'>Terms of Use</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>NGUYÊN TẮC THỰC THI PHÁP</a>
                    <a href='/'>LUẬT CỦA TIKTOK</a>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('language_options')}></div>
                <div className={cx('coppy_right')}>
                    © 2023 Tiktok
                </div>
            </div>
        </div>
    );
}

export default Footer;
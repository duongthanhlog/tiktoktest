import styles from './QrForm.module.scss'
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { QRicon, UserIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function QrForm({ info }) {
    return ( 
        <div className={cx('qr_form')}>
            <div className={cx('body_qr')}>
                <div className={cx('left_content')}>
                    <Image className={cx('qr_img')} src={info.qrImg} />
                    <p className={cx('tips')}>1.Mở ứng dụng TikTok trên thiết bị di động của bạn</p>
                    <p className={cx('tips')}>
                        2. Trên Hồ sơ, nhấn vào <UserIcon width="1.2rem" height="1.2rem" />
                    </p>
                    <p className={cx('tips')}>
                        3. Nhấn vào <QRicon width="1.2rem" height="1.2rem" /> rồi quét mã QR để xác nhận thông
                        tin đăng nhập của bạn
                    </p>
                </div>
                <div className={cx('right_content')}>
                    <Image className={cx('qr_video')} src={info.tipImg} />
                </div>
            </div>
        </div>
     );
}

export default QrForm;
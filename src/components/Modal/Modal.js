import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { AppleIcon, CloseIconModal, FacebookIcon, GoogleIcon, InstagramIcon, KakaotalkIcon, LineIcon, QRicon, TwitterIcon, UserIcon } from '../Icons';
import { ModalContext } from '~/Provider';

const cx = classNames.bind(styles);

function Modal() {
    const [register, setRegister] = useState();
    const {openModal, handleCloseModal} = useContext(ModalContext)
    const [heloo, setHeloo] = useState()  


    const toggleChangeModal = () => {
        setRegister(!register);
    };
    

    return (
        <div className={cx('overlay', {active : openModal})}>
           <div className={cx('wrapper')}>
            <div className={cx('close_wrap')}>
                <button onClick={handleCloseModal}>
                    <CloseIconModal width='25px' height='25px' className={cx('close_icon')}/>
                </button>
            </div>
           <div className={cx('body')}>
                <ul className={cx('login_list')}>
                <h1 >Đăng nhập vào Tiktok</h1>
                    <li className={cx('login_item')}>
                        <QRicon width='2rem' height='2rem' className={cx('icon')}/>
                        Sử dụng mã QR
                    </li>
                    <li className={cx('login_item')}>
                        <UserIcon width='2rem' height='2rem' className={cx('icon')}/>
                        Số điện thoại / Email / Tiktok ID
                    </li>
                    <li className={cx('login_item')}>
                        <FacebookIcon width='2rem' height='2rem' className={cx('icon')}/>
                        Tiếp tục với Facebook
                    </li>
                    <li className={cx('login_item')}>
                        <GoogleIcon width='2rem' height='2rem' className={cx('icon')}/>
                        Tiếp tục với Google
                    </li>
                    <li className={cx('login_item')}>
                        <TwitterIcon width='2rem' height='2rem' className={cx('icon')}/>
                        Tiếp tục với Twitter
                    </li>
                    <li className={cx('login_item')}>
                        <LineIcon width='2rem' height='2rem' className={cx('icon')}/>
                        Tiếp tục với Line
                    </li>
                    <li className={cx('login_item')}>
                        <KakaotalkIcon width='2rem' height='2rem' className={cx('icon')}/>
                        Tiếp tục với Kakaotalk
                    </li>
                    <li className={cx('login_item')}>
                        <AppleIcon width='2rem' height='2rem' className={cx('icon')}/>
                        Tiếp tục với Apple
                    </li>
                    <li className={cx('login_item')}>
                        <InstagramIcon width='2rem' height='2rem' className={cx('icon')}/>
                        Tiếp tục với Instagram
                    </li>
                </ul>
            </div> 
            <div className={cx('footer')}>
                {/* <div className={cx('use_terms')}>Điều khoản sử dụng</div> */}
                <div className={cx('footer_title')}>Bạn không có tài khoản? <span onClick={toggleChangeModal}>Đăng ký</span></div> 
            </div>
            </div>
        </div>
    );
}

export default Modal;

import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { useState, useContext, useEffect } from 'react';
import { ModalContext } from '~/Provider';

import {
    AppleIcon,
    CloseIconModal,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    KakaotalkIcon,
    LineIcon,
    QRicon,
    TwitterIcon,
    UserIcon,
} from '../Icons';

import LoginForm from './LoginForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import RegisterForm from './RegisterForm';

const cx = classNames.bind(styles);

const modalTypes = {
    login: {
        heading: 'Đăng nhập Tiktok',
        list: [
            {
                icon: QRicon,
                title: 'Sử dụng mã QR',
                child: {
                    heading: 'Đăng nhập bằng mã QR',
                    qrImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
                    tipImg: 'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif',
                },
            },
            {
                icon: UserIcon,
                title: 'Số điện thoại / Email / TikTok ID',
                child: {
                    heading: 'Đăng nhập',
                },
            },
            {
                icon: FacebookIcon,
                title: 'Tiếp tục với Facebook',
            },
            {
                icon: GoogleIcon,
                title: 'Tiếp tục với Google',
            },
            {
                icon: TwitterIcon,
                title: 'Tiếp tục với Twitter',
            },
            {
                icon: LineIcon,
                title: 'Tiếp tục với Line',
            },
            {
                icon: KakaotalkIcon,
                title: 'Tiếp tục với Kakaotalk',
            },
            {
                icon: AppleIcon,
                title: 'Tiếp tục với Apple',
            },
            {
                icon: InstagramIcon,
                title: 'Tiếp tục với Instagram',
            },
        ],
        footer: 'Bạn không có tài khoản?',
        button: 'Đăng ký',
        // qrChildForm: {
        //     heading: 'Đăng nhập bằng mã QR',
        //     backIcon: <FontAwesomeIcon icon={faChevronLeft} />,
        //     qrImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
        //     tipImg: 'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif',
        // },
    },
    register: {
        heading: 'Đăng ký Tiktok',
        list: [
            {
                icon: UserIcon,
                title: 'Số điện thoại / Email / TikTok ID',
            },
            {
                icon: FacebookIcon,
                title: 'Tiếp tục với Facebook',
            },
            {
                icon: GoogleIcon,
                title: 'Tiếp tục với Google',
            },
            {
                icon: TwitterIcon,
                title: 'Tiếp tục với Twitter',
            },
            {
                icon: LineIcon,
                title: 'Tiếp tục với Line',
            },
            {
                icon: KakaotalkIcon,
                title: 'Tiếp tục với Kakaotalk',
            },
        ],
        footer: 'Bạn đã có tài khoản?',
        button: 'Đăng nhập',
    },
};

function Modal() {
    const { openModal, handleCloseModal } = useContext(ModalContext)
    
    const [register, setRegister] = useState(false);
    const [formQR, setFormQR] = useState(false);
    const [formPhone, setFormPhone] = useState(false);

    useEffect(() => {
        if (!openModal) {
            setRegister(false);
            setFormQR(false);
            setFormPhone(false);
        }
    }, [openModal]);

    const handleChangeToRegister = () => {
        setRegister(!register);
    };

    return (
        <div className={cx('overlay', { active: openModal })}>
            <div className={cx('wrapper')}>
                <div className={cx('close_wrap')}>
                    <button className={cx('close_btn')} onClick={handleCloseModal}>
                        <CloseIconModal width="25px" height="25px" className={cx('close_icon')} />
                    </button>
                </div>
                {!register ? (
                    <LoginForm
                        setFormQR={setFormQR}
                        setFormPhone={setFormPhone}
                        formQR={formQR}
                        formPhone={formPhone}
                        type={modalTypes.login}
                    />
                ) : (
                    <RegisterForm type={modalTypes.register} />

                )}

                {register && (
                    <div className={cx('use_terms')}>
                        <p>
                            Bằng cách tiếp tục, bạn đồng ý với{' '}
                            <a className={cx('link')} href="">
                                Điều khoản Sử dụng
                            </a>{' '}
                            của TikTok và xác nhận rằng bạn đã đọc hiểu
                            <a className={cx('link')} href="">
                                Chính sách Quyền riêng tư
                            </a>{' '}
                            của TikTok.
                        </p>
                    </div>
                )}
                <div className={cx('footer')}>
                    <div className={cx('footer_title')}>
                        Bạn {register ? 'đã' : 'không'} có tài khoản?
                        <span className={cx('footer_btn')} onClick={handleChangeToRegister}>
                            {register ? 'Đăng nhập' : 'Đăng ký'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

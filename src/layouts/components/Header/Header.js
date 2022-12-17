import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faVideo,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


import images from '~/assests/images';
import config from "~/config"
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MessageIcon, MailBox } from '~/components/Icons/Icon';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import { useContext } from 'react';
import { UserCurrentContext } from '~/Provider';


const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        child: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const { currentUser } = useContext(UserCurrentContext)

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Nhận xu',
            to: '/earncoin',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];



    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo_link')}>
                        <img src={images.logo} alt="Tiktok"/>
                    </Link>
                </div>

                <Search /> 

                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon className="left-icon" icon={faPlus} />}>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Tin nhắn" placement="bottom">
                                <button className={cx('action_btn')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" className={cx('message_icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Hộp thư" placement="bottom">
                                <button className={cx('action_btn')}>
                                    <MailBox className={cx('mail-box_icon')} />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary >Đăng nhập</Button>
                        </>
                    )}

                    <Menu hideOnClick currentUser={currentUser} items={currentUser ? userMenu : MENU_ITEM} >
                        {currentUser ? (
                            <Image
                                className={cx('user_ava')}
                                src="https://icdn.dantri.com.vn/thumb_w/640/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126694049.jpeg"
                            />
                        ) : (
                            <div className={cx('menu_sub')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

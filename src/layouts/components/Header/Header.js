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
import config from '~/config';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MessageIcon, MailBox, MailBoxActive } from '~/components/Icon/icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import { useContext, useState } from 'react';
import { UserCurrentContext } from '~/Provider';
import { useSelector } from 'react-redux';
import { themeSelector } from '~/store/Selectors';


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
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' },
                { code: 'e', title: 'বাঙ্গালি (ভারত)' },
                { code: 'e', title: 'Cebuano (Pilipinas)' },
                { code: 'e', title: 'Čeština (Česká republika)' },
                { code: 'e', title: 'Deutsch' },
                { code: 'e', title: 'Ελληνικά (Ελλάδα)' },
                { code: 'e', title: 'Español' },
                { code: 'e', title: 'Suomi (Suomi)' },
                { code: 'e', title: 'Filipino (Pilipinas)' },
                { code: 'e', title: 'Français' },
                { code: 'e', title: 'हिंदी}' },
                { code: 'e', title: 'Magyar (Magyarország)' },
                { code: 'e', title: 'Bahasa Indonesia' },
                { code: 'e', title: 'Italiano (Italia)' },
                { code: 'e', title: '日本語（日本）' },
                { code: 'e', title: 'Basa Jawa (Indonesia)' },
                { code: 'e', title: 'ខ្មែរ (កម្ពុជា)' },
                { code: 'e', title: '한국어 (대한민국)' },
                { code: 'e', title: 'Bahasa Melayu (Malaysia)' },
                { code: 'e', title: 'မြန်မာ (မြန်မာ)' },
                { code: 'e', title: 'Nederlands (Nederland)' },
                { code: 'e', title: 'Polski (Polska)' },
                { code: 'e', title: 'Português (Brasil)' },
                { code: 'e', title: 'Română (Romania)' },
                { code: 'e', title: 'Русский (Россия)' },
                { code: 'e', title: 'Svenska (Sverige)' },
                { code: 'e', title: 'ไทย (ไทย)' },
                { code: 'e', title: 'Türkçe (Türkiye)' },
                { code: 'e', title: 'Українська (Україна)' },
                { code: 'e', title: '简体中文' },
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
        theme: 'theme',
    },
];

function Header({ className }) {
    const { currentUser } = useContext(UserCurrentContext);
    const [showMail, setShowMail] = useState(false);

    const darkTheme = useSelector(themeSelector)

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: config.routes.profile,
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Nhận xu',
            to: '/earncoin',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
            to: config.routes.live,
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

    const toggleMailBox = () => {
        setShowMail(!showMail);
    };

    const classes = cx('content', className);
    return (
        <header className={cx('wrapper')}>
            <div className={classes}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo_link')}>
                        <Image src={darkTheme ? images.darkModeLogo : images.logo} />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    <Button
                        to={currentUser ? config.routes.upload : ''}
                        className={cx('upload_btn')}
                        text
                        leftIcon={<FontAwesomeIcon className="left-icon" icon={faPlus} />}
                    >
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Tin nhắn" offset={[0, 8]}>
                                <button className={cx('action_btn')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" className={cx('message_icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Hộp thư" offset={[0, 4]}>
                                <button onClick={toggleMailBox} className={cx('action_btn')}>
                                    <MailBox className={cx('mail-box_icon')} />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    <Menu currentUser={currentUser} items={currentUser ? userMenu : MENU_ITEM}>
                        {currentUser ? (
                            <div className={cx('menu_sub')}>
                                <Image
                                    className={cx('user_ava')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/478286debb402d6b3bc00c7394bda46a~c5_720x720.jpeg?x-expires=1673287200&x-signature=aiUWXbIVRb%2B7e9nYC%2BgLqMqYwyM%3D"
                                />
                            </div>
                        ) : (
                            <div className={cx('menu_sub')}>
                                <FontAwesomeIcon className={cx('menu_sub-icon')} icon={faEllipsisVertical} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

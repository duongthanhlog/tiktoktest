import { useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './ShareAction.module.scss';
import classNames from 'classnames/bind';
import {
    FacebookIcon,
    LineIcon,
    SeeMoreIcon,
    ShareEmailInIcon,
    ShareEmbedIcon,
    ShareLinkedInIcon,
    ShareLinkIcon,
    ShareMessageIcon,
    SharePinterestInIcon,
    ShareRedditInIcon,
    ShareTelegramInIcon,
    ShareTwitterIcon,
    ShareWhatsAppIcon,
} from '../Icons';

import { Popper } from '../Popper';

const cx = classNames.bind(styles);
const socialsShare = [
    {
        icon: ShareEmbedIcon,
        title: 'Nhúng',
    },
    {
        icon: ShareMessageIcon,
        title: 'Gửi đến bạn bè',
    },
    {
        icon: FacebookIcon,
        title: 'Chia sẻ với Facebook',
    },
    {
        icon: ShareWhatsAppIcon,
        title: 'Chia sẻ với WhatsApp',
    },
    {
        icon: ShareLinkIcon,
        title: 'Sao chép liên kết',
    },
    {
        icon: ShareTwitterIcon,
        title: 'Chia sẻ với Twitter',
    },
    {
        icon: ShareLinkedInIcon,
        title: 'Chia sẻ với LinkedIn',
    },
    {
        icon: ShareRedditInIcon,
        title: 'Chia sẻ với Reddit',
    },
    {
        icon: ShareTelegramInIcon,
        title: 'Chia sẻ với Telegram',
    },
    {
        icon: ShareEmailInIcon,
        title: 'Chia sẻ với Email',
    },
    {
        icon: LineIcon,
        title: 'Chia sẻ với Line',
    },
    {
        icon: SharePinterestInIcon,
        title: 'Chia sẻ với Pinterest',
    },
];

function ShareAction({ children, className, ...props }) {

    const listWrapperRef = useRef();
    const seeMoreBtnRef = useRef();


    const handleSeeMore = (height, display, overflowY) => {
        listWrapperRef.current.style.height = height;
        seeMoreBtnRef.current.style.display = display;
        listWrapperRef.current.style.overflowY = overflowY;
    };

    const classes = cx('list_wrapper', className)
    const renderListShare = () => {
        return (
            <div ref={listWrapperRef} className={classes}>
                <div className={cx('list_share')}>
                    {socialsShare.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className={cx('item_share')} key={index}>
                                <Icon width="2.6rem" height="2.6rem" />
                                <span className={cx('title')}>{item.title}</span>
                            </div>
                        );
                    })}
                </div>
                    <button
                        ref={seeMoreBtnRef}
                        onClick={() => handleSeeMore('400px', 'none', 'scroll')}
                        className={cx('more_btn')}
                    >
                        <SeeMoreIcon width="2.6rem" height="2.6rem" />
                    </button>
            </div>
        );
    };

    return (
        <HeadlessTippy
            delay={[0, 500]}
            interactive
            hideOnClick={false}
            render={renderListShare}
            onHide={() => handleSeeMore('280px', 'block', 'hidden')}
            {...props}
        >
            {children}
        </HeadlessTippy>
    );
}

export default ShareAction;

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Popper, Wrapper as PopperWrapper } from '~/components/Popper/index.js';
import AccountPreview from '~/components/AccountPreview';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useEffect, useRef, useState } from 'react';
import { TickIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function AccountItem({ data, showPreview }) {
    const accountRef = useRef();

    const renderPreviewAccount = () => {
        return (
            showPreview && (
                <Popper  className={cx('popper')}>
                    <AccountPreview data={data} showPreview />
                </Popper>
            )
        );
    };

    const handleMouseOver = (e) => {
        accountRef.current.style = 'background: var(--color-hover-nav-sidebar);';
    };

    const handleMouseOut = () => {
        accountRef.current.style = 'background:transparent;';
    };
    
    useEffect(() => {
        accountRef.current?.addEventListener('mouseover', handleMouseOver);
        accountRef.current?.addEventListener('mouseout', handleMouseOut);

        return () => {
            accountRef.current?.removeEventListener('mouseover', handleMouseOver);
            accountRef.current?.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <HeadlessTippy
            interactive
            appendTo={document.body}
            placement="bottom-start"
            offset={[-12, -3]}
            delay={[800, 80]}
            render={renderPreviewAccount}
            onShow={handleMouseOut}
        >
            <Link
                ref={accountRef}
                to={config.routes.profileLink(data.nickname)}
                className={cx('account_item')}
                state={data}
            >
                <Image alt="" className={cx('avatar')} src={data.avatar} />
                <div className={cx('account_info')}>
                    <div className={cx('body')}>
                        <p className={cx('nick_name')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <TickIcon className={cx('tick_icon')}/>}
                        </p>
                        <p className={cx('user_name')}>
                            {data.full_name || (data.first_name + ' ' + data.last_name).trim() || data.nickname}
                        </p>
                    </div>
                </div>
            </Link>
        </HeadlessTippy>
    );
}

export default AccountItem;

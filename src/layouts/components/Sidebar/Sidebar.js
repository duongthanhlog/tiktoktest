import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    LiveIconActive,
    UserGroupIconActive,
    HomeIconActive,
} from '~/components/Icon';
import SuggestAccount from '../SuggestedAccounts/SuggestedAccounts';
import LoginBox from '../LoginBox';
import { Fragment, memo, useContext } from 'react';
import { UserCurrentContext } from '~/Provider';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import DiscoverTag from '../DiscoverTags';
import SidebarFooter from './Footer';
import { useLocation } from 'react-router-dom';
import SuggestFollowed from '../SuggestFollowed';
import LiveAccount from '../LiveAccount';

const cx = classNames.bind(styles);

function SideBar({ className }) {
    const location = useLocation();
    const { currentUser } = useContext(UserCurrentContext);

    const isHomePage = location.pathname === config.routes.home;
    const isLivePage = location.pathname === config.routes.live;
    const isProfilePage = location.pathname === config.routes.profile;

    const classes = cx('wrapper', className);

    return (
        <div className={classes}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>

            {!currentUser && <LoginBox />}

            {!currentUser && isHomePage && (
                <SuggestAccount
                    label="Tài khoản được đề xuất"
                    moreButton="Xem Tất cả"
                    hideButton="Ẩn bớt"
                    accountsNumber={5}
                    showPreview
                />
            )}
            {!currentUser && isProfilePage && (
                <SuggestAccount
                    label="Tài khoản được đề xuất"
                    moreButton="Xem Tất cả"
                    hideButton="Ẩn bớt"
                    accountsNumber={5}
                    showPreview
                />
            )}
           

            {currentUser && !isLivePage && (
                <>
                    <SuggestAccount
                        label="Tài khoản được đề xuất"
                        moreButton="Xem Tất cả"
                        hideButton="Ẩn bớt"
                        accountsNumber={5}
                        showPreview
                    />
                    <SuggestFollowed
                        label="Các tài khoản đang follow"
                        moreButton="Xem thêm"
                        hideButton="Ẩn tất cả"
                        accountsNumber={10}
                    />
                </>
            )}

            {isLivePage && <LiveAccount label='Các chủ phòng được đề xuất'/>}

            {!isLivePage && <DiscoverTag label="Khám phá" />}
            <SidebarFooter />
        </div>
    );
}
export default memo(SideBar);

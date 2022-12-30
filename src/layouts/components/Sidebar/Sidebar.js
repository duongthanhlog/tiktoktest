import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    LiveIconActive,
    UserGroupIconActive,
    HomeIconActive,
} from '~/components/Icons';
import SuggestAccount from '../SuggestedAccounts/SuggestedAccounts';
import LoginBox from '../LoginBox';
import Seperate from '~/components/Seperate';
import { memo, useContext } from 'react';
import { UserCurrentContext } from '~/Provider';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import DiscoverTag from '../DiscoverTags';
import SidebarFooter from '../SidebarFooter';

const cx = classNames.bind(styles);

function SideBar({ className }) {
    const { currentUser } = useContext(UserCurrentContext);

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

            <SuggestAccount label="Tài khoản được đề xuất" moreButton="Xem Tất cả" showPreview /> 
            {currentUser && <SuggestAccount label="Các tài khoản đang follow" moreButton="Xem thêm"/>}
            
            <DiscoverTag label="Khám phá" />
            <SidebarFooter />
        </div>
    );
}
export default memo(SideBar);

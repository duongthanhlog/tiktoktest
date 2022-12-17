import Menu, {MenuItem} from './Menu';
import config from '~/config';
import { HomeIcon, UserGroupIcon, LiveIcon, LiveIconActive, UserGroupIconActive, HomeIconActive } from '~/components/Icons';
import SuggestAccount from '../SuggestedAccounts/SuggestedAccounts';
import LoginBox from '../LoginBox';
import Seperate from '~/components/Seperate';
import { useContext } from 'react';
import { UserCurrentContext } from '~/Provider';
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import DiscoverTag from '../DiscoverTags';
import SidebarFooter from '../SidebarFooter';

const cx = classNames.bind(styles)

function SideBar() {
    const { currentUser } = useContext(UserCurrentContext)
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive/>}/>
                <MenuItem title="Đang Follow" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupIconActive />}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveIconActive />}/>
            </Menu>

            <Seperate/>

            {!currentUser && <LoginBox />}
            {!currentUser && <Seperate />}

            <SuggestAccount label='Tài khoản được đề xuất' moreButton="Xem Tất cả" showPreview/>

            <Seperate/>

            {currentUser && <SuggestAccount label='Các tài khoản đang follow' moreButton="Xem thêm" currentUser={currentUser} />}
            {currentUser &&<Seperate/>}


            <DiscoverTag label='Khám phá'/>

            <Seperate/>
            
            <SidebarFooter/>
        </aside>
    );
}

export default SideBar;
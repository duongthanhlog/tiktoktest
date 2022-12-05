import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import UserPost from '~/components/UserPost';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <UserPost/>
        </div>
    );
}

export default Home;

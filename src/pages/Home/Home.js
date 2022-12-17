import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import UserPost from '~/components/UserPost';
import Seperate from '~/components/Seperate';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <UserPost/>
            <Seperate className={cx('seperate')} />
        </div>
    );
}

export default Home;

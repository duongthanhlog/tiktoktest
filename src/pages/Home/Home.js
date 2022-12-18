import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import UserPost from '~/components/UserPost';
import Seperate from '~/components/Seperate';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);



function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://tiktok.fullstack.edu.vn/api/users/search?q=n&type=more')
            .then(res => {
                setPosts(res.data.data)
            })
    }, [])

    return (
        <div className={cx('wrapper')}>
            {posts.map((post) => (
                <div key={post.id}>
                    <UserPost
                        key={post.id}
                        info={post}
                    />
                    <Seperate className={cx('seperate')} />
                </div>
            ))}
        </div>
    );
}

export default Home;

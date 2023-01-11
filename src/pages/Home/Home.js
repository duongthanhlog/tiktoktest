

import UserPost from '~/components/UserPost';
import {useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'

import * as postService from '~/services/postService';
// import SkeletonPost from '~/layouts/components/SkeletonPost';

import classNames from 'classnames/bind';
import styles from './Home.module.scss'; 
import SkeletonPost from '~/components/Skeleton/SkeletonPost';

const cx = classNames.bind(styles);

function Home() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true)
            const data = await postService.post('for-you', page);
            data.map(user => {
                setPosts(prev => [...prev, user])
            })
            setIsLoading(false)
        };
        fetchApi();
    }, [page]);


    useEffect(() => {
        const handleScrollLoadMore = (e) => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setPage(page + 1)
            }
        }
        window.addEventListener('scroll', () => {
            handleScrollLoadMore()
        });
     
        return window.removeEventListener('scroll', handleScrollLoadMore);
    });




    return (
        <div className={cx('wrapper')}>
            {posts.map(user => <UserPost key={user.id} data={user} />)}
            {isLoading && <SkeletonPost quanlity={1}/>}
        </div>
    );
}

export default Home;



import UserPost from '~/components/UserPost';
import Seperate from '~/components/Seperate';
import { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as postService from '~/services/postService';
import SkeletonPost from '~/layouts/components/SkeletonPost';

import classNames from 'classnames/bind';
import styles from './Home.module.scss'; 
const cx = classNames.bind(styles);

function Home() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true)
            const result = await postService.post('for-you', page);
            setPosts((prev) => [...prev, result]);
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
            {posts.map((datas) => {
              return datas.map(item => {
                    return (
                        <UserPost key={item.id} data={item} />
                    );
                });
            })}
            {isLoading && <SkeletonPost quanlity={1}/>}
        </div>
    );
}

export default Home;

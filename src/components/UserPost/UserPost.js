import styles from './UserPost.module.scss';
import classNames from 'classnames/bind';
import Describe from './Describe';
import Image from '~/components/Image';
import VideoItem from './VideoItem';
import Button from '~/components/Button';
import video from '~/assests/video';
import ActionButton from '../ActionButton/ActionButton';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function UserPost() {
    return (
        <div className={cx('post')}>
            <Image
                className={cx('user_img')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dab2fbac6d703a59107ed7cac91d09be.jpeg?x-expires=1670324400&x-signature=eGwPCSzqWa8ss5zknXmczy%2F8OC0%3D"
            />
            <div className={cx('content')}>
                <Describe />
                <div className={cx('video_wrap')}>
                    <VideoItem src={video} className={cx('video')} />
                    <div className={cx('actions')}>
                        <ActionButton type={faHeart} mount="284.4k" />
                        <ActionButton type={faCommentDots} mount="24.4k" />
                        <ActionButton type={faShare} mount="12k" />
                    </div>
                </div>
            </div>
            <Button primary outline small className={cx('button')}>
                Follow
            </Button>
        </div>
    );
}

export default UserPost;

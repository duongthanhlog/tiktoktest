import styles from './UserPost.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const VideoItem = ({ src, className }) => {
   
   const classes = cx('wrapper', className)

    return ( 
       <div className={classes}>
          <video className={cx('video')} src={src} controls/>
       </div>
     );
}    

export default VideoItem;
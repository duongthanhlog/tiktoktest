import styles from './UserPost.module.scss';
import classNames from 'classnames/bind';

import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import routes from '~/config/Routes';
import config from '~/config';

const cx = classNames.bind(styles);

const VideoItem = forwardRef(({
         src, 
         className, 
         children,
         ...props
      }, ref) => {

    const classes = cx('video', className);
    return (
        <Link to={routes.video} className={cx('wrapper')}>
            <video ref={ref} className={classes} src={src} {...props} />
            {children}
        </Link>
    );
});

export default VideoItem;

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function AccountPreview({data, haveFooter}) {
    return (
         <div className={cx('wrapper')}>
         <div className={cx('header')}>
             <Link className={cx('avatar_link')} to={`@${data.nickname}`} state={data}>
                 <Image className={cx('avatar')} src={data.avatar} alt="" />
             </Link>
             <Button className={cx('follow_btn')} primary>
                 Follow
             </Button>
         </div>
         <div className={cx('body')}>
             <div className={cx('item_info')}>
                 <Link to={`@${data.nickname}`} className={cx('nick_name')} state={data}>
                     <strong>{data.nickname}</strong>
                     {data.tick && <FontAwesomeIcon className={cx('tick_icon')} icon={faCheckCircle} />}
                 </Link>
                 <Link to={config.routes.profile} className={cx('user_name')} state={data}>{`${data.first_name} ${data.last_name}`}</Link>
                 <div className={cx('analytics')}>
                     <strong className={cx('value')}>{data.followers_count}</strong>
                     <span className={cx('label')}>Followers</span>
                     <strong className={cx('value')}>{data.likes_count}</strong>
                     <span className={cx('label')}>Likes</span>
                 </div>
             </div>
         </div>
         {haveFooter && <div className={cx('about')}>{data.bio}</div>}
     </div>
    );
}

export default AccountPreview;

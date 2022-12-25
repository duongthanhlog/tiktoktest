import styles from './LoginList.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function LoginList({ list, onChangeView }) {
    return ( 
        <div className={cx('wrapper')}>
            {list.map((item, index) => {
                const Icon = item.icon;
                return (
                    <li onClick={() => onChangeView(item)} key={index} className={cx('login_item')}>
                        <Icon width="2rem" height="2rem" className={cx('icon')} />
                        {item.title}
                    </li>
                )
        })}
        </div>
    );
}

export default LoginList;
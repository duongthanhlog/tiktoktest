import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './LoginBox.module.scss';
import Seperate from '../../../components/Seperate/Seperate';

const cx = classNames.bind(styles);

function LoginBox() {
    return (
            <div className={cx('login_box')}>
                <span className={cx('login_title')}>
                    Đăng nhập để follow các tác giả, thích video và xem bình luận.
                </span>
                <Button primary outline className={cx('login_btn')}>
                    <span>Đăng nhập</span>
                </Button>
            </div>
    );
}

export default LoginBox;

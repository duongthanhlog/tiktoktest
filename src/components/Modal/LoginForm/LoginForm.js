import styles from './LoginForm.module.scss';
import classNames from 'classnames/bind';
import QrForm from '../QrForm';


const cx = classNames.bind(styles);

function LoginForm({ type, formQR, setFormQR, onBack }) {
    
    const gotoChild = (item) => {
        if (item.title.includes('QR')) {
            setFormQR(true);
        }
    };

    return (
        <div className={cx('login_wrap')}>
            {!formQR ? (
                <ul className={cx('login_list')}>
                    <h1>{type.heading}</h1>
                    {type.chanelItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <li onClick={() => gotoChild(item)} key={index} className={cx('login_item')}>
                                <Icon width="2rem" height="2rem" className={cx('icon')} />
                                {item.title}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <QrForm onBack={onBack} type={type}/>
            )}
        </div>
    );
}

export default LoginForm;

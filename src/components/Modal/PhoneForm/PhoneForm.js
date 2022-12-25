import styles from './PhoneForm.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { QRicon, UserIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function PhoneForm({ setView }) {
    const [values, setValues] = useState({
        phone: '',
        code: '',
        password: '',
    });

    const [errorsMessage, setErrorsMessage] = useState({
        phone: '',
        code: '',
        password: '',
    });

    const [formIsError, setFormIsError] = useState(false);

    const changeView = () => {
        setView((prev) => ({ ...prev, tab: 'tiktokID' }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        validate({ name, value });
    };

    const validate = ({ value, name }) => {
        switch (name) {
            case 'phone':
                if ((!isNaN(value) && value.startsWith(0)) || !value) {
                    setErrorsMessage({ ...errorsMessage, [name]: '' });
                } else {
                    setErrorsMessage({ ...errorsMessage, [name]: 'Nhập số điện thoại hợp lệ' });
                }

                break;

            case 'code':
                if ((!isNaN(value) && value.length === 6) || !value) {
                    setErrorsMessage({ ...errorsMessage, [name]: '' });
                } else {
                    setErrorsMessage({ ...errorsMessage, [name]: 'Nhập mã gồm 6 chữ số' });
                }
                break;
        }
    };

    useEffect(() => {
        if (errorsMessage.phone || !values.phone || errorsMessage.code || !values.code) {
            setFormIsError(true);
        } 
        else {
            setFormIsError(false);
        }
    }, [errorsMessage, values]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    console.log('render-phoneform')

    return (
        <form onSubmit={handleSubmit} className={cx('phone_form')}>
            <div className={cx('description')}>
                <label className={cx('label')}>Điện thoại</label>
                <div className={cx('login_type')} onClick={changeView}>
                    Đăng nhập bằng email hoặc TikTok ID
                </div>
            </div>
            <div className={cx('phone_input-container', { invalid: errorsMessage.phone })}>
                <div className={cx('selection_region')}>
                    <span>VN +84</span>
                    <FontAwesomeIcon className={cx('drop_icon')} icon={faChevronLeft} />
                </div>
                <input
                    onChange={handleChange}
                    name="phone"
                    value={values.phone}
                    className={cx('input')}
                    type="text"
                    placeholder="Số điện thoại"
                />
            </div>
            <span className={cx('error_message')}>{errorsMessage.phone}</span>
            <div className={cx('code_input', { invalid: errorsMessage.code })}>
                <div className={cx('form-group')}>
                    <input
                        onChange={handleChange}
                        name="code"
                        value={values.code}
                        className={cx('input')}
                        type="text"
                        placeholder="Nhập mã gồm 6 chữ số"
                    />
                    <Button disabled={values.phone && !errorsMessage.phone ? false : true} className={cx('send_btn')}>
                        Gửi mã
                    </Button>
                </div>
            </div>
            <span className={cx('error_message')}>{errorsMessage.code}</span>
            {/* {passwordInput ? <div className={cx('password_input')}>
                <div className={cx('form-group')}>
                    <input onChange={handleChange} name='password' className={cx('input')} type={passwordType.type} placeholder='Mật khẩu'/>
                    <button onClick={toggleShowPassword} className={cx('show_password-btn')}>
                        <FontAwesomeIcon icon={faEye} className={cx('icon')}/> 
                        <FontAwesomeIcon icon={faEyeSlash} className={cx('icon')}/>
                    </button>
                    <span className={cx('message')}>Ký tự đặc biệt không hợp lệ</span>
                </div>
            </div> :  <div className={cx('code_input')}>
                <div className={cx('form-group')}>
                    <input className={cx('input')} type='text' placeholder='Nhập mã gồm 6 chữ số'/>
                    <Button disabled className={cx('send_btn')}>Gửi mã</Button>
                    <span className={cx('message')}>Nhập mã gồm 6 chữ số</span>
                </div>
            </div>
            } */}
            {/* <div className={cx('message')}>Nhập mã gồm 6 chữ số</div> */}

            <div className={cx('login_with')}>Đăng nhập với mật khẩu</div>

            <Button type="submit" className={cx('button_submit')} disabled={formIsError}>
                Đăng nhập
            </Button>
        </form>
    );
}
export default PhoneForm;

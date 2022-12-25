import styles from './LoginForm.module.scss';
import classNames from 'classnames/bind';
import QrForm from '../QrForm';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import PhoneForm from '../PhoneForm';
import TiktokIdForm from '../TiktokIdForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import LoginList from '../LoginList/LoginList';


const cx = classNames.bind(styles);

function LoginForm({ type, formQR, setFormQR, formPhone, setFormPhone}) {
    const [view, setView] = useState({
        tab : 'default',
        heading : type.heading ,
        child: {}
    })

    
    useEffect(() => {
        if(!formQR && !formPhone) {
            setView({...view, tab :'default'})
        }
    }, [formQR, formPhone])

    const handleBack = () => {
        setView({...view, tab : 'default', heading : type.heading})
    };

    const renderForm = () => {
        switch(view.tab) {
            case 'default' :
                return <LoginList onChangeView={handleChangeView} list={type.list}/>
            case 'qrForm' :
                return <QrForm type={type} info={view.child}/>
            case 'phoneNumber' :
                return <PhoneForm setView={setView}/>
            case 'tiktokID' :
                return <TiktokIdForm setView={setView}/>
        }
    }

    const handleChangeView = (item) => {
        switch(item.title) {
            case 'Sử dụng mã QR' :
                setFormQR(true)
                setView({ tab: 'qrForm', heading : item.child.heading, child : item.child })
                break;

            case 'Số điện thoại / Email / TikTok ID' :
                setFormPhone(true)
                setView({ tab: 'phoneNumber', heading : item.child.heading })
                break;
        }
    };

    return (
        <div className={cx('login_wrap')}>
            {view.tab !== 'default' && <button onClick={handleBack} className={cx('back_btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>}
                <ul className={cx('login_list')}>
                    <h1>{view.heading}</h1>
                    {renderForm()}
                </ul>
        </div>
    );
}

export default LoginForm;

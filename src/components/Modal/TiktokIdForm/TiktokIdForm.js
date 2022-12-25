import styles from './TiktokIdForm.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function TiktokIdForm({onBack, setView}) {

    const changeView = () => {
        setView(prev => ({...prev, tab: 'phoneNumber'}))
    }
    console.log('render-tiktokidform')

    return ( 
        <div className={cx('qr_form')}>
            <button onClick={changeView}>this is tiktok ID form</button>
        </div>
     );
}

export default TiktokIdForm;
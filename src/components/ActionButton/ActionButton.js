import styles from './AcctionButton.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function ActionButton({type, mount}) {

    return ( 
        <div className={cx('action')}>
            <button className={cx('acction_btn')}>
                <FontAwesomeIcon className={cx('icon')} icon={type} />
            </button>
            <div className={cx('amount')}>{mount}</div>
        </div>
     );
}

export default ActionButton;
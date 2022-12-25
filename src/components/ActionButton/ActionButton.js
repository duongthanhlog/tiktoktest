import styles from './AcctionButton.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useContext } from 'react';
import { UserCurrentContext, ModalContext } from '~/Provider';

const cx = classNames.bind(styles);

function ActionButton({type, mount, className, onClick}, ref) {
    const {currentUser} = useContext(UserCurrentContext)
    const { handleOpenModal } = useContext(ModalContext)


    const classes = cx('action_btn', className)

    if(!currentUser && type.iconName !== 'share') {
        onClick = handleOpenModal
    }
    
    return ( 
            <div ref={ref} className={cx('action')}>
                <button onClick={onClick} className={classes}>
                    <FontAwesomeIcon className={cx('icon')} icon={type} />
                </button>
                <div className={cx('amount')}>{mount}</div>
            </div>
     );
}

export default forwardRef(ActionButton);


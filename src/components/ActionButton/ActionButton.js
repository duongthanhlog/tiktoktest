import styles from './AcctionButton.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useContext } from 'react';
import { UserCurrentContext, ModalContext } from '~/Provider';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ActionButton({ type, mount, className, to, ...props }, ref) {
    const { currentUser } = useContext(UserCurrentContext);
    const { handleOpenModal } = useContext(ModalContext);
    

    const classes = cx('action_btn', className);
    
    let Component = 'button'

    if(to) {
        props.to = to
        Component = Link
    }
    
    const handleClick = () => {
        if (currentUser === false && !type.iconName.includes('share')) {
            handleOpenModal()
        }
    }

    return (
        <div ref={ref} className={cx('action')}>
            <Component onClick={handleClick} className={classes} {...props}>
                <FontAwesomeIcon className={cx('icon')} icon={type} />
            </Component>
            <div className={cx('amount')}>{mount}</div>
        </div>
    );
}

export default forwardRef(ActionButton);

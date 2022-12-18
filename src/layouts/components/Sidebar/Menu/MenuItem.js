import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            className={(nav) => cx('menu_item', { active: nav.isActive })}
            children={(nav) => {
                const isActive = nav.isActive;
                    return (
                        <>
                            {isActive ? activeIcon : icon}
                            <span className={cx('title')}>{title}</span>
                        </>
                    );
            }}
            to={to}
        >
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon : PropTypes.node.isRequired
};

export default MenuItem;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button/Button';
import { useSelector } from 'react-redux';
import { themeSelector } from '~/store/Selectors';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, to }) {
    const darkTheme = useSelector(themeSelector)
    
    const classes = cx('menu_item', {
        separate: data.separate,
    });


    return (
        <div className={cx('wrapper')}>
            <Button to={to} className={classes} leftIcon={data.icon} onClick={onClick} >
                <span className={cx('title')}>{data.title}</span>
            </Button>
            {data.theme && (
                <button onClick={onClick} className={cx('theme_area', { active: darkTheme })}>
                    <span className={cx('button')}></span>
                </button>   
            )}
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;

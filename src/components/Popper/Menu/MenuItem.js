import PropTypes from 'prop-types'; 
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Button from "../../Button/Button";
import { useEffect } from 'react';

const cx = classNames.bind(styles); 


function MenuItem( { data, onClick } ) {
    const initActiveValue = JSON.parse(localStorage.getItem('activeButton'))

    const classes = cx('menu_item', {
        separate: data.separate,
    })      

    return ( 
        <div onClick={onClick} className={cx('wrapper')}>
            <Button className={classes} leftIcon={data.icon} onClick={onClick}>
                <span className={cx('title')}>{data.title}</span>
            </Button>
            {data.theme && <button className={cx('theme_area', { active : initActiveValue })}><span className={cx('button')}></span></button>}
        </div>
     );
}

MenuItem.propTypes = {
    data : PropTypes.object.isRequired,
    onClick : PropTypes.func
}

export default MenuItem;
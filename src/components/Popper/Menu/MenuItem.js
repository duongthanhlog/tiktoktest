import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Button from "../../Button";

const cx = classNames.bind(styles); 


function MenuItem( { data, onClick } ) {
    
    const classes = cx('menu_item', {
        separate: data.separate,
    })  

    return ( 
        <Button className={classes} leftIcon={data.icon} onClick={onClick}>
            <span className={cx('title')}>{data.title}</span>
        </Button>
     );
}

export default MenuItem;
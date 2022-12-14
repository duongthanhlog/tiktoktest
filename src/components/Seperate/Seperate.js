import classNames from 'classnames/bind'
import { memo } from 'react';
import styles from './Seperate.module.scss'

const cx = classNames.bind(styles)

function Seperate({ className }) {
    const classes = cx('seperate', className)
    return ( 
        <div className={classes}></div>
     );
}


export default memo(Seperate);
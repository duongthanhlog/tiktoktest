import Header from '../components/Header/Header';
import PropTypes from 'prop-types'; 
import styles from './HeaderOnly.module.scss'
import classNames from 'classnames/bind';
import Footer from '../components/Footer';

const cx = classNames.bind(styles)

function HeaderOnly( {children} ) {
    return ( 
        <div>
            <Header className={cx('header')}/>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer/>
        </div>
    );
}

HeaderOnly.propTypes = {
    children : PropTypes.node.isRequired,
}

export default HeaderOnly;
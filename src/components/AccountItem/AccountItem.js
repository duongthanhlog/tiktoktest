import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function AccountItem({ data }) {

    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src={data.avatar} 
                alt={data.last_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.nickname}
                    <span>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck}/>}
                    </span>
                </h4>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data : PropTypes.object.isRequired,
}

export default AccountItem;
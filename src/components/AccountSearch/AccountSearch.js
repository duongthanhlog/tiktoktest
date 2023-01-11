import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountSearch.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';
import config from '~/config';

const cx = classNames.bind(styles);

function AccountSearch({ data, onClick }) {
    return (
        <Link
            to={config.routes.profileLink(data.nickname)}
            state={data}
            className={cx('wrapper')}
            onClick={onClick}
        >
            <Image className={cx('avatar')} src={data.avatar} alt={data.last_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.nickname}
                    <span>{data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />}</span>
                </h4>
                <span className={cx('full_name')}>{data.full_name || data.nickname}</span>
            </div>
        </Link>
    );
}

AccountSearch.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountSearch;

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Popper, Wrapper as PopperWrapper } from '~/components/Popper/index.js';
import AccountPreview from '~/components/AccountPreview';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({data, showPreview}) {
    return (
        <HeadlessTippy
            appendTo={document.body}
            interactive
            placement="bottom-start"
            delay={[800, 80]}
            render={() => {
                return (
                    <Popper>
                        {showPreview && <AccountPreview 
                            data={data}
                            showPreview
                        />}
                    </Popper>
                );
            }}
        >
            <Link to={`/@${data.nickname}`} className={cx('account_item')} state={data}>
                <Image alt="" className={cx('avatar')} src={data.avatar} />
                <div className={cx('item_info')}>
                    <p className={cx('nick_name')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('tick_icon')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('user_name')}>{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </Link>
        </HeadlessTippy>
    );
}

export default AccountItem;

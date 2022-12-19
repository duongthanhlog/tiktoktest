import styles from './RegisterForm.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { SeeMoreIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function RegisterForm({ type }) {
    const [seeMore, setSeeMore] = useState(false);
    
    const handleSeeMore = () => {
        setSeeMore(true);
    };

    return (
        <div className={cx('register_wrap', { show : seeMore })}>
            <ul className={cx('register_list')}>
                <h1>{type.heading}</h1>
                {type.chanelItems.map((item, index) => {
                  const Icon = item.icon  
                  return( 
                        <li key={index} className={cx('register_item')}>
                            <Icon width="2rem" height="2rem" className={cx('icon')} />
                            {item.title}
                        </li>
                  )
                }
                )}
            </ul>
            {!seeMore && (
                <button onClick={handleSeeMore} className={cx('load_more')}>
                    <SeeMoreIcon width="2.4rem" height="2.4rem" />
                </button>
            )}
        </div>
    );
}

export default RegisterForm;
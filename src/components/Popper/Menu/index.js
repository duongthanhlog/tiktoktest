import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import Header from './Header.js';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, currentUser }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () =>
        current.data.map((item, index) => {
            const isParent = item.child;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory([...history, item.child]);
                        }
                    }}
                />
            );
        });

    return (
        <Tippy
            visible
            offset={[12, 8]}
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu_list', { currentUser })} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu_popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Ngôn ngữ"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu_body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

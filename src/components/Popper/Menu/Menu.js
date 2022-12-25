import PropTypes from 'prop-types';
import { Popper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

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
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const renderResult = (attrs) => {
        return (
            <div className={cx('menu_list', { currentUser })} tabIndex="-1" {...attrs}>
                <Popper className={cx('menu_popper')}>
                    {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                    <div className={cx('menu_body')}>{renderItem()}</div>
                </Popper>
            </div>
        );
    };


    return (
        <Tippy
            offset={[12, 8]}
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    currentUser: PropTypes.bool,
};

export default Menu;

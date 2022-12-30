import PropTypes from 'prop-types';
import { Popper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import Header from './Header';
import MenuItem from './MenuItem';
import { useContext, useState } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { ThemeContext } from '~/Provider/ThemeProvider';
import { UseLocalStorage } from '~/layouts/components/Hooks';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, currentUser }) {
    const activeBtn = JSON.parse(localStorage.getItem('activeButton'))
    const {toggleDarkTheme} = useContext(ThemeContext)
    const [history, setHistory] = useState([{ data: items }]);
    const [activeTheme, setActiveTheme] = useState(() => activeBtn ?? false)
    
    const current = history[history.length - 1];

    const renderItem = () =>
        current.data.map((item, index) => {
            const isParent = item.child;
            const isTheme = item.theme
            return (
                <MenuItem
                    key={index}
                    data={item}
                    activeTheme={activeTheme}
                    onClick={() => {
                        if (isParent) {
                            setHistory([...history, item.child]);
                        }
                        if(isTheme) {
                            toggleDarkTheme()
                            setActiveTheme(UseLocalStorage('activeButton', !activeTheme))
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

    const renderResult = () => {
        return (
            <div className={cx('menu_list', { currentUser })}>
                <Popper className={cx('menu_popper')}>
                    {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                    <div className={cx('menu_body')}>{renderItem()}</div>
                </Popper>
            </div>
        );
    };


    return (
        <Tippy
            interactive
            offset={[0, 6]}
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

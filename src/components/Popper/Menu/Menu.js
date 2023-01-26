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
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '~/store/Selectors';
import { changeTheme } from '~/store/action';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, currentUser, className }) {
    const [history, setHistory] = useState([{ data: items }]);
    
    const dispatch = useDispatch()
    const darkTheme = useSelector(themeSelector)
    const current = history[history.length - 1];

    const renderItem = () =>
        current.data.map((item, index) => {
            const isParent = item.child;
            const isTheme = item.theme
            return (
                <MenuItem
                    key={index}
                    data={item}
                    to={item.to}
                    isTheme={isTheme}
                    onClick={() => {
                        if (isParent) {
                            setHistory([...history, item.child]);
                        }
                        if(isTheme) {
                            dispatch(changeTheme(!darkTheme))
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
        const classes = cx('menu_list', className, { currentUser })
        return (
            <div className={classes}>
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

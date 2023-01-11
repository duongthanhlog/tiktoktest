import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import { DefaultLayout } from '~/layouts';
import { Fragment, useContext, useEffect } from 'react';
import Modal from './components/Modal';

import styles from './components/GlobalStyles/GlobalStyles.module.scss';
import classNames from 'classnames/bind';


import { ModalContext } from './Provider/ModalProvider';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { themeSelector } from './store/Selectors';


const cx = classNames.bind(styles);

function App() {
    const { openModal } = useContext(ModalContext);

    const darkTheme = useSelector(themeSelector)

    useEffect(() => {
        if (openModal) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'overlay';
        }
    }, [openModal]);

    useEffect(() => {
        if (darkTheme) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
    }, [darkTheme]);

    return (
        <SkeletonTheme
            baseColor={darkTheme ? '#484848' : 'rgb(240, 240, 240)'}
            highlightColor={darkTheme ? '#484848' : 'rgb(220, 220, 220)'}
        >
          <Modal />
            <Router>
                <div className={cx('app')}>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </SkeletonTheme>
    );
}

export default App;

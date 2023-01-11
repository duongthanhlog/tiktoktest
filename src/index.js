import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import UserProvider from './Provider/UserProvider';
import ModalProvider from './Provider/ModalProvider';
import 'react-loading-skeleton/dist/skeleton.css';
import ThemeProvider from './Provider/ThemeProvider';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <Provider store={store}>
                <GlobalStyles>
                    <UserProvider>
                            <ModalProvider>
                                {/* <ThemeProvider> */}
                                    <App />
                                {/* </ThemeProvider> */}
                            </ModalProvider>
                    </UserProvider>
                </GlobalStyles>
             </Provider>
);

reportWebVitals();

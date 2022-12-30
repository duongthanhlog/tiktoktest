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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <GlobalStyles>
                <UserProvider>
                        <ModalProvider>
                            <ThemeProvider>
                                <App />
                            </ThemeProvider>
                        </ModalProvider>
                </UserProvider>
            </GlobalStyles>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import UserProvider from './Provider/UserProvider';
import ModalProvider from './Provider/ModalProvider';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <SkeletonTheme baseColor="rgb(240, 240, 240)" highlightColor="rgb(230, 230, 230)">
        <GlobalStyles>
            <UserProvider>
                <ModalProvider>
                    <App />
                </ModalProvider>
            </UserProvider>
        </GlobalStyles>
    </SkeletonTheme>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

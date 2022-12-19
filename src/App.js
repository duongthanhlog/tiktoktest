import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from './routes/routes'
import { DefaultLayout } from '~/layouts';
import { Fragment, useContext, useEffect, useState } from 'react'
import Modal from "./components/Modal";

import styles from './components/GlobalStyles/GlobalStyles.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)


import {ModalContext} from "./Provider/ModalProvider";

function App() {
  const {openModal} = useContext(ModalContext)
  useEffect(() => {
    if(openModal) {
        document.body.style.overflowY = 'hidden'
    }
    else {
        document.body.style.overflowY = 'overlay'
    }
  }, [openModal])

  return (
    <Router>
      <div className={cx('app')}>
          <Routes>
              {publicRoutes.map((route, index) => {
                  const Page = route.component
                  let Layout = DefaultLayout

                  if(route.layout) {
                    Layout = route.layout
                  }
                  else if(route.layout === null){
                    Layout = Fragment
                  }

                  return <Route key={index} path={route.path} element={
                    <Layout>
                        <Page/>
                    </Layout>
                  }/>
                  
              })}
           </Routes>
         <Modal/>
      </div>
    </Router>
  );
}

export default App;

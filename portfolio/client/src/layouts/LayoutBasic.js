import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LayoutBasic.scss';

//import useAuth from '../hooks/useAuth';

export default function LayoutBasic(props) {

    const {children} = props;



  return (
     <>
        <div className='header-layout'>
          <Header />
        </div>
        <div className='content-layout'> 
          {children}
        </div>
        <div className='footer-layout'>
          <Footer  />
        </div>

    </> 
  )
}

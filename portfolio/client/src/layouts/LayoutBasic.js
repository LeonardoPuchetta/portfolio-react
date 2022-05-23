import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LayoutBasic.scss';

export default function LayoutBasic(props) {

    const {children} = props;

  return (
     <>
    
        <Header/>
    
        <div className='content'>
          
          {children}
        
        </div>

        <Footer />

    </> 
  )
}

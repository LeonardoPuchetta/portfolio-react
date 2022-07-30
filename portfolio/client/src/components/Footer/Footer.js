import React from 'react';
import './Footer.scss';
import {apiVersion} from './../../api/config';

import EmailIcon from '@mui/icons-material/Email';


export default function Footer() {
  return (
    <>
      <div className='footer-left'>
      <EmailIcon className='icon-footer'/>
         <h3>leonardopuchetta21@gmail.com</h3>
      </div>
      <div className='footer-right'>
          <h3>{apiVersion}</h3>
      </div>
    </>
  )
}

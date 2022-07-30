import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material'

import useAuth from '../../hooks/useAuth';
import { logout } from '../../api/auth';


export default function Header() {


    const {admin} = useAuth();
    let navigate = useNavigate();

    const loginControl = () =>{
        if (admin){
                //deslogueamos administrador
                logout();
                //recargamos la pagina
                window.location.reload();
        } else {
        navigate('/')
        }
    }
    let actualURL = window.location.pathname;
    if (actualURL === '/'){console.log('actualURL')};
         
  return (
        <>
            <div className='header-left'> 
                <IconButton href='https://github.com/LeonardoPuchetta' target='_blank' className='icon-button'>
                    <GitHubIcon/>
                    <span className='tooltip'>Perfil de Github</span>
                </IconButton>
                <IconButton href='https://linkedin.com/in/leonardo-puchetta' target='_blank' className='icon-button'>
                    <LinkedInIcon/>
                    <span className='tooltip'>Perfil de LinkedIn</span>
                </IconButton>
            </div>
            <div className='header-right'> 
                <div id='log-div'>
                <IconButton onClick={loginControl} className='icon-button' id='log-icon'>

                        
                   { (admin && actualURL !== '/') ?  <LogoutIcon/> : <LoginIcon/>}
                   
                   {admin? <span className='tooltip-login'>Logout</span> : <span className='tooltip-login'>Login</span> }

                </IconButton>
                </div>
            </div>
       </>
  )
}

import React ,{useEffect} from 'react';
import './Inicio.scss'

import LoginForm from '../components/LoginForm';

import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material'
import ChairIcon from '@mui/icons-material/Chair';
import useAuth from '../hooks/useAuth';


export default function Inicio() {

  //extraemos el admin y el isLoading del contexto 
  const {admin,isLoading} = useAuth();
  
  
  let navigate = useNavigate();

  useEffect(() => {
    if (admin){
       return (navigate('/Home'))
    }
 },[admin]);


 const redirectToHome = () => {
  window.location.href = "/Home";
}

  return (
    
    <div className='content-inicio'>
        <IconButton  className='icon-button-invited' onClick={redirectToHome}>
          <ChairIcon fontSize="large" />
          <h1 className='invited-text' >Entrar como invitado</h1>
          {/* <span className='tooltip-invited'>Entrar como invitado</span> */}
        </IconButton>
    
        <LoginForm/>
    </div>    
    
  )
}

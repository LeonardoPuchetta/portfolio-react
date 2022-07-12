import React ,{useEffect} from 'react';

import LoginForm from '../components/LoginForm';

import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


export default function Inicio() {

  //extraemos el admin y el isLoading del contexto 
  const {admin,isLoading} = useAuth();
  console.log(admin)
  
  let navigate = useNavigate();

  useEffect(() => {
    if (admin){
       return (navigate('/Home'))
    }
 },[admin]);

  return (
    <div>
        <LoginForm/>
        <div>Entrar como invitado-Login automatico como invitado</div>
    </div>

  )
}

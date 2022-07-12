import React ,{useEffect} from 'react';
import NewProjectForm from '../components/NewProjectForm';
import './NewProject.scss';

import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function NewProject() {


    //extraemos el admin y el isLoading del contexto 
    const {admin,isLoading} = useAuth();
    
    let navigate = useNavigate();

    useEffect(() => {
      if (!admin && isLoading){
         return (navigate('/Home'))
      }
   },[admin,isLoading]);


   if (admin && !isLoading){
    return (
      <div className='form'>
        <NewProjectForm/>
      </div>
    )
   }

}

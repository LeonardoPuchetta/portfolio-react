import React , {useState} from 'react';
import { ACCESS_TOKEN,REFRESH_TOKEN } from '../../utils/constants';
import { signInApi } from '../../api/user';

export default function LoginForm() {

    //definicion de estado para guardar datos 
    const [inputs , setInputs ] = useState({
        name: '',
        password: ''
    });

    // funcion onChange para poder actualizar el formulario 
    const changeForm = e => {
    setInputs({
                ...inputs, // para traer los valores anteriores
                [e.target.name]: e.target.value // el name es el mismo que en el Input 
                // esto basta para los dos campos 
            })
         }

    // funcion para realizar el login 
    const login = async event => {

            event.preventDefault();
             const result = await signInApi(inputs);
                if (result.message) {
                        alert(`${result.message}`)
                        return  
                } else {
                    const {accessToken ,refreshToken } = result // destructuring para traer los token 
                    //guardamos en el localStorage los token 
                    localStorage.setItem(ACCESS_TOKEN,accessToken);
                    localStorage.setItem(REFRESH_TOKEN,refreshToken);

                    //mensaje de exito 
                     //redireccionamiento una vez hecho el login 
                    window.location.href = "/Home";
                }
            

    }    
    
    const redirectToHome = () => {
        window.location.href = "/Home";
    }


  return (
    <>
    <form className='login-form' name='loginForm'  onSubmit={login}>
        <label id='name-label' className='label-description' htmlFor='name'>
            <span>Usuario</span></label>
            <input name='name' type='text' placeholder='Nombre de usuario' 
            id='name' className='input-form'  value={inputs.name} onChange={changeForm} required/>

        <label id='password-label' className='label-description' htmlFor='password'>
            <span>Contraseña</span></label>
            <input name='password' type='text' placeholder='Contraseña' 
            id='password' className='input-form'  value={inputs.password} onChange={changeForm} required/>
        <button type='submit' id='submit' className='btn-login'>
          <span>Ingresar</span>
        </button>
        

    </form>

    <button type='submit'  className='btn-invited' onClick={redirectToHome}>
        <span>Entrar como invitado</span>
    </button>

  </>  
  )
}

import React ,{useEffect, useState} from 'react';
import './Modal.scss';


export default function Modal(props) {

//el contenido del modal
const {children,title,isVisibleModal,setIsVisibleModal} = props;

const modalButton = document.querySelector('.modal-btn');

useEffect(()=>{
        changeModalClass(isVisibleModal);
},[isVisibleModal])
    


if (modalButton){
    modalButton.addEventListener('click',(event)=>{
        event.preventDefault();
        setIsVisibleModal(false);
    })
}


//funcion para cambiar visibilidad del modal
const changeModalClass = (isVisibleModal) => {

    const modal = document.querySelector('.modal');
    
    if (isVisibleModal){
            modal.classList.add('modal-show')
            if (modal.classList.contains('modal-hidden')){
                        modal.classList.remove('modal-hidden')
            }
        } else {
            modal.classList.add('modal-hidden');
            if (modal.classList.contains('modal-show')){
                        modal.classList.remove('modal-show')
                    }
        }
        }
       



  return (
<div className='modal' id='modal'>
    <div className='modal-title' >
            <h1>{title}</h1>
    </div>
   
    <div className='modal-content'>
        {children}
    </div>
    <div >
        <button className='modal-btn'>Close</button>
    </div>
</div>
  )
}

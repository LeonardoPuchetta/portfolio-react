import React from 'react'

export default function LayoutBasic(props) {

    const {children} = props;

  return (
     <>
    <h1>Estamos en LayoutBasic</h1>
    <div>{children}</div>
    </> 
  )
}

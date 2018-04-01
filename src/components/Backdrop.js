import React from 'react';
import '../styles/Backdrop.css';

const Backdrop = (props)=>{

  return (

    <div className="Backdrop" onClick={()=>{props.removeModal()}}></div>

  );
};


export default Backdrop;

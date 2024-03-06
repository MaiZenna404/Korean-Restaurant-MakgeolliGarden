import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiErrorAlt } from "react-icons/bi";
import './Snackbar.css'

const Snackbar = forwardRef((props, ref) => {

  const [showSnackbar, setShowSnackbar] = useState(false);

useImperativeHandle(ref, () => ({
  appear() {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false); 
    }, 3000);
    },
}));
  
  return (
    <div className='snackbarContent'
    id={showSnackbar ? "appear" : "hidden"} style={{backgroundColor: props.type === "completed" ? "#0c5645" : '#ff0000'}}>
      <div className="symbol">
        {props.type === "completed" ? <h1><RiVerifiedBadgeFill /></h1> : <h1><BiErrorAlt /></h1>}
        </div>
      <div className='message'>{props.message}</div>
    </div>
  )
});

export default Snackbar

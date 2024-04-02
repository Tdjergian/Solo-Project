import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, useRef } from 'react-redux';  
import { verifyUser } from '../slices/verificationSlice.js';



const HomePage = props => {
    const navigate = useNavigate();
    const loggedIn = useSelector(state => state.verification.loggedIn);
    const dispatch = useDispatch();
    console.log(loggedIn)

   
    useEffect(()=>{
        fetch('/verify')
        .then(res => {
          if(res.status === 200){
          dispatch(verifyUser())
          }else {
          navigate('/');
          } 
        
    }, [])});
  
    function reRoute () { 
        navigate('/');
     }
    
   
    if(!loggedIn){
    return (
      <>
        <div>
          Loading Home page, please wait...
        </div>
      </>
    )
    }else {
      return (
      <div>
          {/* {words} */}
          <button onClick={reRoute}>
              back
          </button>
      </div>
    )
  }
};

export default HomePage; 

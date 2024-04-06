import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, useRef } from 'react-redux';  
import { verifyUser } from '../slices/verificationSlice.js';
import NewTicketForm from '../components/newTicketForm.js';
import TicketDisplay from '../components/ticketDisplay.js';
import StateBuilder from '../components/stateBuilder.js';
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";




const HomePage = props => {
    const navigate = useNavigate();
    const loggedIn = useSelector(state => state.verification.loggedIn);
    const dispatch = useDispatch();
    console.log(loggedIn)

   
    useEffect(()=>{
        fetch('/verify')
        .then(res => {
          // console.log(res.status)
          if(res.status === 200){
          dispatch(verifyUser())
          }else {
          navigate('/signin');
          } 
        
    }, [])});
  
    function reRoute () { 
        navigate('/signin');
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
        
      <div className='home'>
      
        <StateBuilder></StateBuilder>
          <div>
            <NewTicketForm/>
          </div>
          <div>
            <TicketDisplay/>
          </div>
        
      </div>
    )
  }
};

export default HomePage; 

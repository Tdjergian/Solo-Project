import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { populateTickets } from '../slices/ticketSlice';

export default function stateBuilder(props){
 const dispatch = useDispatch()
  useEffect(()=>{
    const fetchTickets = async ()=>{
      try{
        const response = await fetch('./ticket');
        const tickets = await response.json();
        dispatch(populateTickets(tickets))
      }
      catch(err){
        console.log(err);
      }
    };
    fetchTickets();
  }, []);

  return null;
}

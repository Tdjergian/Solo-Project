import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { addTicket } from '../slices/ticketSlice';

export default function stateBuilder(props){
 const dispatch = useDispatch()
  useEffect(()=>{
    const fetchTickets = async ()=>{
      try{
        const response = await fetch('./ticket');
        const tickets = await response.json();
        tickets.forEach(ticket=>{
          dispacth(addTicket(ticket));
        })
      }
      catch(err){
        console.log(err);
      }
    };
    fetchTickets();
  }, []);

  return null;
}

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { populateTickets } from '../slices/ticketSlice';

export default function StateBuilder(props){
const ticketState = useSelector(state=> state.tickets)
 const dispatch = useDispatch()
 console.log('in StateBuilder')
  useEffect(()=>{
    const fetchTickets = async ()=>{
      try{
        const response = await fetch('./ticket');
        const tickets = await response.json();
        // console.log(tickets)

        dispatch(populateTickets(tickets))
        console.log('updated ticket state', ticketState )
      }
      catch(err){
        console.log(err);
      }
    };
    fetchTickets();
  }, []);

  return (<>
  </>);
}
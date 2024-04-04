import React from "react";
import { useSelector, useDispatch, useRef } from 'react-redux'; 
import Ticket from "./ticket";

export default function TicketDisplay (props){
    const ticketState = useSelector(state=>{console.log(state); return state.tickets.tickets});
    console.log('ticketState:', ticketState)
    const tickets = [];
    ticketState.forEach(ticket => {
        tickets.push(<Ticket _id={ticket._id} title={ticket.title} status={ticket.status} tags={ticket.tags} comments={ticket.comments} />)
    });

    return (
        <>
            {tickets}
        </>
    )
}
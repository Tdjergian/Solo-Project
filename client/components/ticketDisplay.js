import React from "react";
import { useSelector, useDispatch, useRef } from 'react-redux'; 
import Ticket from "./ticket";

export default function TicketDisplay (props){
    const ticketState = useSelector(state=>state.tickets);
    const tickets = [];
    ticketState.forEach(ticket => {
        tickets.push(<Ticket title={ticket.title} status={ticket.status} tags={ticket.tags} comments={ticket.comments} />)
    });

    return (
        <>
            {tickets}
        </>
    )
}
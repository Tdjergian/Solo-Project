import React from "react";
import { useSelector, useDispatch, useRef } from 'react-redux'; 
import Ticket from "./ticket";
import { Container, Col, Row } from "react-bootstrap";

export default function TicketDisplay ({ statusType }){
    const ticketState = useSelector(state=>{console.log(state); return state.tickets.tickets});
    console.log('ticketState:', ticketState)
    const tickets = [];
    ticketState.forEach(ticket => {
        tickets.push(
            <Col>
                <Ticket _id={ticket._id} title={ticket.title} status={ticket.status} tags={ticket.tags} comments={ticket.comments} />
            </Col>
        )
    });

    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} className="g-1">
                {tickets}
            </Row>
        </Container>
    )
}

//test
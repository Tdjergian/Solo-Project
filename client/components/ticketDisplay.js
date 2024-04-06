import React from "react";
import { useSelector, useDispatch, useRef } from 'react-redux'; 
import Ticket from "./ticket";
import { Container, Col, Row } from "react-bootstrap";

export default function TicketDisplay ({ statusType }){
    console.log('statusType:', statusType)
    const ticketState = useSelector(state=> state.tickets.tickets[statusType]);
    console.log('ticketState:', ticketState)
    const tickets = [];
    ticketState.forEach(ticket => {
        tickets.push(
        
            <Ticket _id={ticket._id} title={ticket.title} status={ticket.status} tags={ticket.tags} comments={ticket.comments} />

        )
    });

    return (
        <Container>
            <Col>
                <Row xs={1} md={2} lg={3} xl={4} className="g-1">
                    {tickets}
                </Row>
            </Col>
        </Container>
    )
}

//test
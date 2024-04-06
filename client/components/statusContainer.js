import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, useRef } from 'react-redux';  
import { verifyUser } from '../slices/verificationSlice.js';
import NewTicketForm from './newTicketForm.js';
import TicketDisplay from './ticketDisplay.js';
import StateBuilder from './stateBuilder.js';
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";

export default function StatusContainer({ }){

    const ticketState = useSelector(state=> state.tickets.tickets);
    

    return (
        <Container className='status-containers'>
            <Row>
                <Col>
                    <TicketDisplay statusType='open' id='new-tickets-display'/>
                </Col>
                <Col>
                    <TicketDisplay statusType='open' id='open-tickets-display' />
                </Col>
                <Col>
                    <TicketDisplay statusType='open' id='pending-tickets-display' />
                </Col>
            </Row>
           
        </Container>
    )
};
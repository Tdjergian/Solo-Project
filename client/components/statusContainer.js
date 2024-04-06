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
        <Container border='primary' className='status-containers'>
            <Row xs={1} md={2} lg={3} className='gx-1'>
                <Col style={{ border: '1px solid #000000' }}>
                    New Tickets
                    <TicketDisplay statusType='new' id='new-tickets-display'/>
                </Col>
                <Col style={{ border: '1px solid #000000' }}>
                Open tickets
                    <TicketDisplay   statusType='open' id='open-tickets-display' />
                </Col>
                <Col style={{ border: '1px solid #000000' }}>
                Pending Tickets
                    <TicketDisplay  statusType='pending' id='pending-tickets-display' />
                </Col>
            </Row>
           
        </Container>
    )
};
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { populateTickets } from '../slices/ticketSlice';
// import { set } from "mongoose";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";


export default function Ticket({ title, status, tags, comments, _id }){
    const commentSection = [];
    const [comment, setComment] = useState('');
    const [open, setOpen] = useState(false);
    const [newStatus, setNewStatus] = useState('');
    const dispatch = useDispatch();
    console.log('comments:', comments)

    comments.forEach(comment => {
        commentSection.push(<Card.Text>{comment}</Card.Text>)
    });

    const tagSection = [];
    console.log('tags:', tags)
    tags.forEach(tag => {
        tagSection.push(<Card.Text>{tag}</Card.Text>)
    });

    const handleChange = (e)=>{
        setComment(e.target.value);
        console.log('comment:', comment)
    }

    const deleteTicket = (e)=>{
        fetch(`./ticket/delete/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(updatedTickets => {
            console.log('updated Tickets', updatedTickets)
            dispatch(populateTickets(updatedTickets))
            
        })
    };

    const changeStatus = (e)=>{
        console.log('new status:', e.target.value, typeof e.target.value)

        // setNewStatus('hello');
        console.log('newStatus:', newStatus)
        fetch(`./ticket/status/${_id}`, {
            method: 'PUT',
            body: JSON.stringify({status: e.target.value}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(updatedTickets => {
            dispatch(populateTickets(updatedTickets))
        });
    }

    const addComment = (e)=>{

        fetch(`./ticket/comment/${_id}`, {
            method: 'POST',
            body: JSON.stringify({comment: comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(updatedTickets => {
            dispatch(populateTickets(updatedTickets))  
        });
        setComment('');
    }

    const toggleOpen = (e)=>{
        setOpen(!open);
    }

    let ticketInfo;
    if(open){
        ticketInfo = <>
            <Card.Header>
                <Row>
                    <Col>
                        Status: {status}
                    </Col>
                    <Col>
                        <select type='text' onChange={changeStatus}>
                            <option value=''>Update Status</option>
                            <option value='new'>New</option>
                            <option value='open'>Open</option>
                            <option value='pending'>Pending</option>
                        </select>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="text-center">
                Comments
                {commentSection}
            </Card.Body>
            <Card.Body>
                Tags
                {tagSection}
            </Card.Body>
            {/* <div>{tagSection}</div> */}
            <input className='newCommentInput' placeholder='add comment' value={comment} onChange={handleChange} />
            <Button variant="secondary" className='addCommentButton' onClick={addComment}>Add Comment</Button>
            <Container className="justify-content-center">
                <Button variant="dark" className='deleteTicketButton' onClick={deleteTicket}>Delete</Button>
            </Container>
        </>
    }else {
        ticketInfo = null
    }

    return (
        <Card border="primary" style={{width:'18rem', marginBottom:'20px', backgroundColor: 'rgba(0,0,0,0.1)'}}> 
            <Card.Title className="text-center" onClick={toggleOpen}>{title}</Card.Title>
            {ticketInfo}
        </Card>
    )
};
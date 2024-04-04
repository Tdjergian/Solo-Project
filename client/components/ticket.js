import React from "react";
import { useDispatch } from 'react-redux';
import { populateTickets } from '../slices/ticketSlice';

export default function Ticket({ title, status, tags, comments, _id }){
    const commentSection = [];
    const dispatch = useDispatch();

    // comments.forEach(comment => {
    //     commentSection.push(<div>{comment}</div>)
    // });
    // const _id = key;
    const tagSection = [];
    // tags.forEach(tag => {
    //     tagSection.push(<div>{tag}</div>)
    // });

    const addComment = (e)=>{
        const newComment = e.target.value;
        fetch(`./ticket/comment/${_id}`, {
            method: 'POST',
            heaters: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(updatedTickets => {
            dispatch(populateTickets(updatedTickets))  
        })
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
    }


    return (
        <> 
            -----------------------------------------
            <div>{title}</div>
            <div>{status}</div>
            <div>{commentSection}</div>
            <div>{tagSection}</div>
            <input className='newCommentInput' placeholder='add comment' />
            <div>
                <button className='deleteTicketButton' onClick={deleteTicket}>Delete</button>
            </div>
            ------------------------------------------
        </>
    )
};

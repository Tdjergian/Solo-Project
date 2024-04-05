import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addTicket } from "../slices/ticketSlice";
import { Button, Container, Row, Col } from "react-bootstrap";


export default function NewTicketForm (props){
    const [formState, setFormState] = useState({title:'', status:'', tags:[]})
    const dispatch = useDispatch();


    const handleChange = (e)=>{
        // console.log(formState)
        if(e.target.id === 'title'){
            setFormState({...formState, title:e.target.value})
        }else if(e.target.id === 'status'){
            setFormState({...formState, status: e.target.value})
        }
        // console.log(formState)
    }

    const submitForm = (e)=>{
        fetch('./ticket', {
            method: 'POST', 
            body: JSON.stringify(formState),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(ticket => {
            console.log('ticket:', ticket)
            dispatch(addTicket(ticket))
            setFormState({title:'', status:'', tags:[]})
        })
    }

  return (
    <Container style={{ marginBottom:'20px', padding:'5px'}}>
      <Row className="gx-1">
        <Col className="my-1">
          <input id="title" type="text" placeholder="title" onChange={handleChange} value={formState.title}></input>
        </Col>
        <Col className="my-1">
          <select style={{height: 30}} id="status" type="text" placeholder="status" onChange={handleChange} value={formState.status}>
            <option value="none">Select Status</option>
            <option value="new">New</option>
            <option value="open">Open</option>
            <option value="pending">Pending</option>
          </select>
        </Col >
        <Col className="my-1">
        <input id="tags" type="text" placeholder="Tags" multiple></input>
        </Col>
      </Row>
        <Button onClick={submitForm}>Create Ticket</Button>
    </Container>
  )
}
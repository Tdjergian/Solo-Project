import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addTicket } from "../slices/ticketSlice";
import { Button, Container, Row, Col } from "react-bootstrap";


export default function NewTicketForm (props){
    const [formState, setFormState] = useState({title:'', status:'', tags:[]})
    const [currentTag, setCurrentTag] = useState('');
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

    const addTag = (e)=>{
        console.log('formState:', formState)
        setFormState({...formState, tags: [...formState.tags, currentTag]})
        setCurrentTag('')
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

    const tags = [];
    formState.tags.forEach(tag => {
        tags.push(<div>{tag}</div>)
    });

  return (
    <Container fluid style={{ marginBottom:'20px', marginLeft:'20px', padding:'5px'}}>
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
          {tags}
        <input id="tags" type="text" placeholder="Tags" value={currentTag} onChange={(e)=>{setCurrentTag(e.target.value)}}></input>
        <button onClick={addTag}>add tag</button>
        </Col>
      </Row>
        <Button onClick={submitForm}>Create Ticket</Button>
    </Container>
  )
}
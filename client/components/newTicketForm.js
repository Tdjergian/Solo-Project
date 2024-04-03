import React, { useState} from "react";
import { useDispatch } from "redux-redux"

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
                
            }
    }

  return (
    <>
      {/* <form method = 'POST' action='/ticket'> */}
        {/* <input name="department" type="text" placeholder="department"></input> */}
        <input id="title" type="text" placeholder="title" onChange={handleChange} value={formState.title}></input>
        <select id="status" type="text" onChange={handleChange} value={formState.status}>
          <option value="new">New</option>
          <option value="open">Open</option>
          <option value="pending">Pending</option>
        </select>
        {/* <input name="customStatus" type="text" placeholder="Custom Status (optional)"></input> */}
        <input id="tags" type="text" placeholder="Tags" multiple></input>
        <button onClick={submitForm}>Create Ticket</button>
      {/* </form> */}
    </>
  )
}

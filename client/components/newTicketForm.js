import React, { useState} from "react";

export default function newTicketForm (props)=>{

  return (
    <>
      <form method = 'POST' action='/ticket'>
        <input name="department" type="text" placeholder="department"></input>
        <input name="title" type="text" placeholder="title"></input>
        <select name="status" type="text">
          <option value="new">New</option>
          <option value="open">Open</option>
          <option value="pending">Pending</option>
        </select>
        <input name="customStatus" type="text" placeholder="Custom Status (optional)"
        <input name="tags" type="text" placeholder="Tags" multiple></input>
      </form>
    </>
  )
}
  

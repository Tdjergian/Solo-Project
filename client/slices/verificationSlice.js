import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
    name: 'verification', 
    initialState: {
        loggedIn : false,
    }, 
    reducers: {
        verifyUser : (state, action)=>{
              state.loggedIn = true;
                console.log('user has been verified')        
        }
      

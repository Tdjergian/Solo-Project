import { createSlice } from "@reduxjs/toolkit";

export const verificationSlice = createSlice({
    name: 'verification', 
    initialState: {
        loggedIn : false,
    }, 
    reducers: {
        verifyUser : (state, action)=>{
              state.loggedIn = true;
                console.log('user has been verified')        
        }
    });

export const { verifyUser } = verificationSlice.actions;
export default verificationSlice.reducer;
      

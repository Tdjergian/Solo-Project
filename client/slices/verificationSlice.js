import { createSlice } from "@reduxjs/toolkit";

export const verificationSlice = createSlice({
    name: 'verification', 
    initialState: {
        loggedIn : false,
    }, 
    reducers: {
        verifyUser : (state, action)=>{
              state.loggedIn = true;
                // console.log('user has been verified')        
        },
        unverifyUser: (state, action)=>{
            state.loggedIn = false;
            // console.log('user is no longer verified')
        }
    }
});

export const { verifyUser } = verificationSlice.actions;
export default verificationSlice.reducer;
      

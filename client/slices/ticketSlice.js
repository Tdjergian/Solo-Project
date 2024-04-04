import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
    name: 'tickets', 
    initialState: [], 
    reducers: {
        addTicket: (state, action) => {
            state.push(action.payload);
            console.log('ticket added');
        }, 
        populateTickets: (state,action) => {
            state = action.payload;
            console.log('state populated')
        }
    }

});

export const { addTicket } = ticketSlice.actions;
export default ticketSlice.reducer;

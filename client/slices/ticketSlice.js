import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
    name: 'tickets', 
    initialState: {tickets:[]}, 
    reducers: {
        addTicket: (state, action) => {
            state.tickets.push(action.payload);
            // console.log('ticket added');
        }, 
        populateTickets: (state,action) => {
            // console.log('this is the original state', state)
            // console.log('this is the action payload', action.payload)
            state.tickets = action.payload;
            // console.log('this is the populated state', state)
        }
    }

});

export const { addTicket, populateTickets } = ticketSlice.actions;
export default ticketSlice.reducer;

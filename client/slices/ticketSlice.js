import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
    name: 'tickets', 
    initialState: {tickets:{
        new:[],
        open:[],
        pending:[]
    }}, 
    reducers: {
        addTicket: (state, action) => {
            state.tickets[action.payload.status].push(action.payload);
            // console.log('ticket added');
        }, 
        populateTickets: (state,action) => {
            const allTickets = action.payload;
            state.tickets.new = [];
            state.tickets.open = [];
            state.tickets.pending = [];
            allTickets.forEach(ticket => {
                state.tickets[ticket.status].push(ticket);
            });
            
        }
    }

});

export const { addTicket, populateTickets } = ticketSlice.actions;
export default ticketSlice.reducer;

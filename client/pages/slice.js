import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
    name: 'tickets', 
    initialState: {
        tickets : 0
    }, 
    reducers: {
        addTicket: (state, action) => {
            state.tickets++;
            console.log('ticket added');
        }
    }

});

export const { addTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
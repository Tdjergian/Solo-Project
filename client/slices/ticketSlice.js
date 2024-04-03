import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
    name: 'tickets', 
    initialState: [], 
    reducers: {
        addTicket: (state, action) => {
            state.push(action.payload);
            console.log('ticket added');
        }
    }

});

export const { addTicket } = ticketSlice.actions;
export default ticketSlice.reducer;

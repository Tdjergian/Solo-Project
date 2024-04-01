import { configureStore } from '@reduxjs/toolkit';
import ticketSlice from './slices/ticketSlice';
import verificationSlice from './slices/verificationSlice'

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = configureStore(
  {
    reducer: {
      tickets: ticketSlice, 
      verification: verificationSlice
    }
  }
  
);

export default store;

import { configureStore } from '@reduxjs/toolkit';
import ticketSlice from './pages/slice';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = configureStore(
  {
    reducer: {
      tickets: ticketSlice
    }
  }
  
);

export default store;
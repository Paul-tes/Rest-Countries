import { configureStore } from '@reduxjs/toolkit';
import coutriesReducer from './coutries/countriesSlice';

const store = configureStore({
  reducer: {
    coutries: coutriesReducer,
  },
});

export default store;

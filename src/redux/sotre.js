import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './coutries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;

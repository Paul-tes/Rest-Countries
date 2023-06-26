import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';

export const fetchCoutries = createAsyncThunk(
  'coutry/fetchCoutry',
  async () => {
    const res = await axios.get(URL);
    return res.data;
  },
);

const coutriesSlice = createSlice({
  name: 'countries',
  initialState: {
    coutries: [],
    status: 'idle',
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoutries.pending, (state) => {
        state.status = 'loadding...';
      })
      .addCase(fetchCoutries.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.coutries = action.payload.map((country) => ({
          name: country.name.common,
          officialName: country.name.official,
          region: country.region,
          lang: country.languages[0],
          area: country.area,
          flag: country.flags.png,
          loc: country.capitalInfo.capitalInfo,
          pop: country.population,
          gini: country.gini,
        }));
      });
  },
});

export default coutriesSlice;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk(
  'coutry/fetchCoutry',
  async () => {
    const res = await axios.get(URL);
    return res.data;
  },
);

export const coutriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loadding';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.countries = action.payload.map((country) => ({
          name: country.name.common,
          officialName: country.name.official,
          region: country.region,
          lang: country.languages,
          area: country.area,
          flag: country.flags.png,
          loc: country.capitalInfo,
          pop: country.population,
          gini: country.gini,
          map: country.maps.googleMaps,
        }));
      });
  },
});

export default coutriesSlice.reducer;

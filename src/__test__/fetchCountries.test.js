import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchCountries } from '../redux/countries/countriesSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('fetchCountries', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should dispatch the correct actions on success', async () => {
    const countries = [{ name: 'Country 1' }, { name: 'Country 2' }];

    // Mock the HTTP request using nock
    nock('https://restcountries.com')
      .get('/v3.1/all')
      .reply(200, countries);

    const expectedActions = [
      { type: 'countries/fetchCountries/pending' },
      {
        type: 'countries/fetchCountries/fulfilled',
        payload: [
          { name: 'Country 1' },
          { name: 'Country 2' },
        ],
      },
    ];

    const store = mockStore({ countries: [] });

    await store.dispatch(fetchCountries());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch the correct actions on failure', async () => {
    // Mock the HTTP request using nock
    nock('https://restcountries.com')
      .get('/v3.1/all')
      .reply(500);

    const expectedActions = [
      { type: 'countries/fetchCountries/pending' },
      {
        type: 'countries/fetchCountries/rejected',
        error: expect.any(Error),
      },
    ];

    const store = mockStore({ countries: [] });

    await store.dispatch(fetchCountries());

    expect(store.getActions()).toEqual(expectedActions);
  });
});

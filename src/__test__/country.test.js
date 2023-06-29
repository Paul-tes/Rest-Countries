import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Country from '../components/Coutry';
import '@testing-library/jest-dom';
import country from '../__mock__/country';

describe('Country Card', () => {
  it('it should renders a country item', () => {
    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <Country country={country} />
      </BrowserRouter>,
    );
    expect(getByAltText('show icon')).toBeInTheDocument();
    expect(getByAltText('flag')).toBeInTheDocument();
    expect(getByText(country.name)).toBeInTheDocument();
    expect(getByText(country.pop.toString())).toBeInTheDocument();
  });
});

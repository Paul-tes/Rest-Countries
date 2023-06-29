import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('should render the header with the correct title and icons', () => {
    render(<Header />);

    expect(screen.getByText('The World')).toBeInTheDocument();
    expect(screen.getByAltText('left arrow icon')).toBeInTheDocument();
    expect(screen.getByAltText('mic icon')).toBeInTheDocument();
    expect(screen.getByAltText('setting icon')).toBeInTheDocument();
  });
});

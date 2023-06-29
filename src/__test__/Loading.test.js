import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading';

describe('Loading', () => {
  it('should render the loading component', () => {
    render(<Loading />);

    expect(screen.getByRole('section')).toBeInTheDocument();
    expect(screen.getByRole('div')).toBeInTheDocument();
    expect(screen.getByRole('section')).toHaveClass('sec-loading');
    expect(screen.getByRole('div')).toHaveClass('one');
  });
});
import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading';
import '@testing-library/jest-dom';

describe('Loading', () => {
  it('should render the loading component', () => {
    render(<Loading />);

    expect(screen.getByTestId('loading-section')).toBeInTheDocument();
    expect(screen.getByTestId('loading-div')).toBeInTheDocument();
    expect(screen.getByTestId('loading-section')).toHaveClass('sec-loading');
    expect(screen.getByTestId('loading-div')).toHaveClass('one');
  });
});

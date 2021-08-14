import { render, screen, fireEvent } from 'test-utils';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });
  it('Display Users when search phrase is present', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Ro' } });
    setTimeout(() => screen.findAllByText(/Ron/), 3000);
  });
});

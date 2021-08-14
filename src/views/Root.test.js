import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as Unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });
  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');
    fireEvent.change(login, { target: { value: 'Elo' } });
    fireEvent.change(password, { target: { value: 'Makrelo' } });

    fireEvent.click(screen.getByText('Sign In'));
    await waitFor(() => screen.getByText(/Oops/));
  });
  it('Displays authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');
    fireEvent.change(login, { target: { value: 'alicja@teacher.com' } });
    fireEvent.change(password, { target: { value: 'password123' } });

    fireEvent.click(screen.getByText('Sign In'));
    setTimeout(
      waitFor(() => screen.getByText(/Ron/)),
      3000
    );
  });
});

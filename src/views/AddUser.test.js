import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Add User', () => {
  it('adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Kinga' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4,5' } });
    fireEvent.click(screen.getByText('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Kinga');
  });
  it('prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Kinga' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4,5' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Kinga');
    console.log('newUser', newUser);
    expect(newUser).not.toBeInTheDocument();
  });
});

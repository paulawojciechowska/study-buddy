import React from 'react';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <AuthProvider>
            <GlobalStyle />
            {children}
          </AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;

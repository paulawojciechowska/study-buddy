import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = ({ handleSignIn, loginError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <FormField label="login" name="login" id="login" {...register('login')} />
      <FormField label="password" name="password" id="password" type="password" {...register('password')} />
      <Button type="submit">Sign In</Button>
      {loginError ? <span>{loginError}</span>  : null}
    </form>
  );
};
const Root = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Please provide valid user data');
    }
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;

import React from 'react';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './Root.styles';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';

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

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <FormField label="login" name="login" id="login" {...register('login')} />
      <FormField label="password" name="password" id="password" type="password" {...register('password')} />
      <Button type="submit">Sign In</Button>
    </form>
  );
};
const Root = () => {
  const auth = useAuth();
  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;

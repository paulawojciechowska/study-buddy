import React from 'react';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const Root = () => {
  const auth = useAuth();
  const error = useError();
  return (
    <>
      {error.error ? <ErrorMessage message={error.error} /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;

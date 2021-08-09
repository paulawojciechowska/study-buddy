import React, { useState, useCallback, useContext } from 'react';

const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const dispatchError = useCallback((message) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 6500);
  }, []);
  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useError needs to be used inside AuthContext');
  }

  return errorContext;
};

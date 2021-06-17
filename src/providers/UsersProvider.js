import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

export const UsersContext = React.createContext({
  users: [],
  addNewUser: () => {},
  deleteUser: () => {},
  isLoading: false,
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };
  const addNewUser = (formValues) => {
    setUsers([formValues, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        addNewUser,
        deleteUser,
        isLoading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

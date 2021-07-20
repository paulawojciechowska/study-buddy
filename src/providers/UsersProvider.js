import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext({
  users: [],
  addNewUser: () => {},
  deleteUser: () => {},
  isLoading: false,
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setUsers(data.students))
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
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

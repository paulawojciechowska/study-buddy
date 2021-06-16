import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/Form/Form';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
const Root = () => {
  const initialFormState = {
    name: '',
    attendance: '',
    average: '',
  };
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);
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
  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const addNewUser = (e) => {
    e.preventDefault();
    // const newUser = {
    //   name: formValues.name,
    //   attendance: formValues.attendance,
    //   average: formValues.average,
    // };
    setUsers([formValues, ...users]);
    setFormValues(initialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/" exact>
                <UsersList deleteUser={deleteUser} users={users} isLoading={isLoading} />
              </Route>
              <Route path="/add-user">
                <Form formValues={formValues} handleInputChange={handleInputChange} addNewUser={addNewUser} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

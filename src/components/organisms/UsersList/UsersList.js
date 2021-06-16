import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
// import FormField from 'components/molecules/FormField/FormField';
// import { Button } from 'components/atoms/Button/Button';
// import PropTypes from 'prop-types';

const UsersList = ({ users, deleteUser, isLoading }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

// UsersList.propTypes = {

// }

export default UsersList;

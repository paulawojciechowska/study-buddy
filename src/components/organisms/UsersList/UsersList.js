import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { useGetStudentsByGroupQuery } from 'store';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const UsersList = ({ handleOpenStudentDetail }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetStudentsByGroupQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Title>Students List</Title>
      <StyledList>
        {data.students.map((userData) => (
          <UsersListItem onClick={() => handleOpenStudentDetail(userData.id)} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;

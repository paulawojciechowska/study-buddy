import React, { useState, useEffect } from 'react';
import { useStudents } from 'hooks/useStudents';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
// import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const UsersList = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();
  
  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);
  return (
    <>
      {/* <Title>Students List</Title> */}
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
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

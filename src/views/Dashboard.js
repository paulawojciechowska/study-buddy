import React, { useEffect, useState } from 'react';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams, Redirect } from 'react-router-dom';
import { StyledTitle, PanelWrapper, DashboardWrapper, StyledButton, StyledLink } from './Dashboard.styles';
import Modal from 'components/organisms/Modal/Modal';
import StudentsDetails from 'components/molecules/StudentDetails/StudentDetails';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const { id } = useParams();
  const { getGroups, getStudentById } = useStudents();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      // console.log(groups);
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetail = async (id) => {
    const student = await getStudentById(id);
    setCurrentUser(student);
    handleOpenModal();
  };
  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0].id}`} />;
  return (
    <DashboardWrapper>
      <PanelWrapper>
        <StyledTitle>Group {id}</StyledTitle>
        <nav>
          {groups.map(({ id }) => (
            <StyledButton>
              <StyledLink key={id} to={`/group/${id}`}>
                {id}
              </StyledLink>
            </StyledButton>
          ))}
        </nav>
      </PanelWrapper>
      <ViewWrapper>
        <UsersList handleOpenStudentDetail={handleOpenStudentDetail} />
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <StudentsDetails student={currentUser} />
        </Modal>
      </ViewWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

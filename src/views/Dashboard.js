import React, { useEffect, useState } from 'react';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams, Redirect } from 'react-router-dom';
import { StyledTitle, PanelWrapper, DashboardWrapper, StyledButton, StyledLink } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import { AverageWrapper } from 'components/molecules/UsersListItem/UsersListItem.styles';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const { id } = useParams();
  const { getGroups, getStudentById } = useStudents();
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetail = async (id) => {
    const student = await getStudentById(id);
    setCurrentUser(student);
    handleOpenModal();
  };
  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;
  return (
    <DashboardWrapper>
      <PanelWrapper>
        <StyledTitle>Group {id || groups[0]}</StyledTitle>
        <nav>
          {groups.map((group) => (
            <StyledButton>
              <StyledLink key={group} to={`/group/${group}`}>
                {group}
              </StyledLink>
            </StyledButton>
          ))}
        </nav>
      </PanelWrapper>
      <ViewWrapper>
        <UsersList handleOpenStudentDetail={handleOpenStudentDetail} />
        {isOpen ? (
          <Modal handleCloseModal={handleCloseModal}>
            <Title>{currentUser.name} | Group {currentUser.group}</Title>
            <p>{currentUser.attendance}</p>
            <AverageWrapper score={currentUser.average}>{currentUser.average}</AverageWrapper>
          </Modal>
        ) : null}
      </ViewWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

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

  const mockedStudent = {
    id: '1',
    name: 'Adam Romański',
    attendance: '39%',
    average: '2.3',
    group: 'A',
    grades: [
      {
        subject: 'Modern Economy',
        average: '4.4',
      },
      {
        subject: 'Trade and Logistis',
        average: '3.7',
      },
      {
        subject: 'Business Philosophy',
        average: '2.8',
      },
    ],
  };

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
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <StudentsDetails student={mockedStudent} />
        </Modal>
      </ViewWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

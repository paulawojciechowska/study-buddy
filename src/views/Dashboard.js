import React from 'react';
import { useStudents } from 'hooks/useStudents';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams, Redirect } from 'react-router-dom';
import { StyledTitle, PanelWrapper, DashboardWrapper, StyledButton, StyledLink } from './Dashboard.styles';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

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
        <UsersList />
      </ViewWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

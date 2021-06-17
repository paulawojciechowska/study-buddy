import React, { useContext } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users, isLoading } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList users={users} isLoading={isLoading} />
    </ViewWrapper>
  );
};

export default Dashboard;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { UserShape } from 'types';
import { Wrapper, InfoWrapper } from './UsersListItem.styles';
import { AverageWrapper } from 'components/atoms/AverageWrapper/AverageWrapper';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper {...props}>
      <AverageWrapper score={average}>{average}</AverageWrapper>
      <InfoWrapper>
        <p>
          {name}
          <ButtonIcon onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </InfoWrapper>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;

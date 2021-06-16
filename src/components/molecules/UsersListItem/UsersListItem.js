import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { Wrapper, AverageWrapper, InfoWrapper } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
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

UsersListItem.propTypes = {
  deleteUser: PropTypes.func,
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

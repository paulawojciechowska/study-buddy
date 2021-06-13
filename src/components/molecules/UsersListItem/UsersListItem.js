import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, AverageWrapper, InfoWrapper } from './UsersList.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <AverageWrapper score={average}>{average}</AverageWrapper>
    <InfoWrapper>
      <p>
        {name} <Button />
      </p>
      <p>attendance: {attendance}</p>
    </InfoWrapper>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
import PropTypes from 'prop-types';

export const UserShape = {
  average: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};

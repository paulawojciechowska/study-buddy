import PropTypes from 'prop-types';

export const UserShape = {
  average: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};

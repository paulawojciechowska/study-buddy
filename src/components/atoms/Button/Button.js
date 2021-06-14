import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;

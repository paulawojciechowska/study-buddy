import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { StyledButton } from './ButtonIcon.styles';

const ButtonIcon = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default ButtonIcon;

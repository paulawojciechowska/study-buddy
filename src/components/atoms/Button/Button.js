import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { StyledButton } from './Button.styles';

const Button = () => {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;

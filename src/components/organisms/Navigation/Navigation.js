import React from 'react';
import { Logo, Wrapper, StyledLink } from './Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </Logo>
    <StyledLink exact to="/">
      Dashboard
    </StyledLink>
    <StyledLink to="add-user">Add user</StyledLink>
  </Wrapper>
);

export default Navigation;

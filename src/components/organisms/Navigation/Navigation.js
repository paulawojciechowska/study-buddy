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
    <StyledLink to="/">Dashboard</StyledLink>
    <StyledLink to="add-user">Add user</StyledLink>
    <StyledLink to="/">Setting</StyledLink>
    <StyledLink to="/">Logout</StyledLink>
  </Wrapper>
);

export default Navigation;

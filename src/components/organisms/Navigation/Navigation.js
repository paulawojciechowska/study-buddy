import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { Logo, Wrapper, StyledLink } from './Navigation.styles';

const Navigation = () => {
  const auth = useAuth();
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact to="/group">
        Dashboard
      </StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;

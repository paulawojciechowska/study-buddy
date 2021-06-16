import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 4px solid ${({ theme }) => theme.colors.lightPurple};
  justify-content: flex-start;
  padding: 30px 0;
`;
export const Logo = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-right: 20px;
    text-align: right;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 15px 20px 15px auto;
`;

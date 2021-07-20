import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { Link } from 'react-router-dom';

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
  padding: 25px;
`;
export const PanelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
`;
export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  font-weight: bold;
  margin: 0 5px;
  border-radius: 15px;
  border: none;
`;
export const StyledLink = styled(Link)`
  height: 0px;
  width: 0px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-right: 10px;
`;
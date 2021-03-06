import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 4px solid ${({ theme }) => theme.colors.lightPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
`;
export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  position: absolute;
  left: 0;
  top: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 350px;
  margin: 0;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const SearchResultsItem = styled.li`
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.lightGrey : theme.colors.white)};
  font-weight: bold;
  list-style: none;
  padding: 20px 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  &:not(:last-child) {
    border-bottom: 3px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const AverageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 45px;
  height: 45px;
  border-radius: 30px;
  background-color: ${({ theme, score }) => {
    if (score > 4) return theme.colors.success;
    if (score > 3) return theme.colors.warning;
    if (score > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const InfoWrapper = styled.div`
  padding: 25px 20px;
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;
  }
  p:first-child {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
    display: flex;
    align-items: center;
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

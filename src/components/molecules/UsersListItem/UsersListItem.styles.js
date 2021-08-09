import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
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

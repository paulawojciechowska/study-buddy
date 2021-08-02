import styled from 'styled-components';

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
    if (score >= 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

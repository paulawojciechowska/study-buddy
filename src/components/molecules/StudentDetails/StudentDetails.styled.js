import styled from 'styled-components';
import { AverageWrapper } from 'components/atoms/AverageWrapper/AverageWrapper';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  h3 {
    font-weight: 700;
    margin-top: 40px;
  }
  p {
    font-size: 20px;
    font-weight: 100;
  }
`;
export const ContentWrapper = styled.div`
  padding: 40px;
`;
export const AverageWrapperBig = styled(AverageWrapper)`
  width: 65px;
  height: 65px;
  border-radius: 60px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 450px;
`;
export const CourseWrapper = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 15px;
    font-weight: 100;
  }
`;

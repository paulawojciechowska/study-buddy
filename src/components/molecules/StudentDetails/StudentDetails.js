import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { AverageWrapper } from 'components/atoms/AverageWrapper/AverageWrapper';
import { Wrapper, HeaderWrapper, ContentWrapper, CourseWrapper, AverageWrapperBig } from './StudentDetails.styled';

const StudentsDetails = ({ student }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <AverageWrapperBig score={student.average}>{student.average}</AverageWrapperBig>
        <Title>{student.name}</Title>
      </HeaderWrapper>
      <ContentWrapper>
        <h3>Course:</h3>
        <p>{student.course}</p>
        <h3>Average grades:</h3>
        {student.grades.map((subject) => (
          <CourseWrapper>
            <p>{subject.subject}</p>
            <AverageWrapper score={subject.average}>{subject.average}</AverageWrapper>
          </CourseWrapper>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default StudentsDetails;

import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { AverageWrapper } from 'components/atoms/AverageWrapper/AverageWrapper';
import { Wrapper, HeaderWrapper, ContentWrapper, CourseWrapper, AverageWrapperBig } from './StudentDetails.styled';
import { useGetStudentByIdQuery } from 'store';

const StudentsDetails = ({ student }) => {
  const { data, isLoading } = useGetStudentByIdQuery(student);
  if (isLoading) {
    return (
      <Wrapper>
        <p>Loading user...</p>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <HeaderWrapper>
        <AverageWrapperBig score={data.students.average}>{data.students.average}</AverageWrapperBig>
        <Title>{data.students.name}</Title>
      </HeaderWrapper>
      <ContentWrapper>
        <h3>Course:</h3>
        <p>{data.students.course}</p>
        <h3>Average grades:</h3>
        {data.students.grades.map((subject) => (
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

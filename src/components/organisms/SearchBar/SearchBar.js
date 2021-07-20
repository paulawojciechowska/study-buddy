import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useStudents } from 'hooks/useStudents';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (searchPhrase) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);
  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);
  return (
    <>
      <SearchBarWrapper>
        <StatusInfo>
          <p>Logged as</p>
          <p>
            <strong>Teacher</strong>
          </p>
        </StatusInfo>
        <SearchWrapper>
          <Input label="Search" id="search" name="search" value={searchPhrase} onChange={(e) => setSearchPhrase(e.target.value)} />
          {searchPhrase && matchingStudents.length ? (
            <SearchResults>
              {matchingStudents.map((student) => {
                return <li key={student.id}>{student.name}</li>;
              })}
            </SearchResults>
          ) : null}
        </SearchWrapper>
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;

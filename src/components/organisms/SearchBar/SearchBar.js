import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItem } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });
  return (
    <>
      <SearchBarWrapper>
        <StatusInfo>
          <p>Logged as</p>
          <p>
            <strong>Teacher</strong>
          </p>
        </StatusInfo>
        <SearchWrapper {...getComboboxProps()}>
          <Input {...getInputProps()} id="search" name="search" placeholder="Search" />
          <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()} aria-label="results">
            {isOpen &&
              matchingStudents.map((item, index) => {
                return (
                  <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                    {item.name}
                  </SearchResultsItem>
                );
              })}
          </SearchResults>
        </SearchWrapper>
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;

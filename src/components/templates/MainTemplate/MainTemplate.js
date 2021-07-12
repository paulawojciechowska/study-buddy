import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from 'components/templates/NewsSection/NewsSection';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <SearchBar />
    {children}
    <NewsSection />
  </Wrapper>
);

export default MainTemplate;

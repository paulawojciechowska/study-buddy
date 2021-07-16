import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSeactionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

export const query = `
{
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
}`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => {
        setError("Sorry We coundn't load the articles");
      });
  }, []);
  return (
    <Wrapper>
      <NewsSeactionHeader>University news feed</NewsSeactionHeader>
      {articles.length > 0 && !error ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSeactionHeader>{error ? error : 'Loading...'}</NewsSeactionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;

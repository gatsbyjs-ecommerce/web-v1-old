import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import dayjs from 'dayjs';

const Container = styled.article`
  && {
    border-top: none;
    margin-top: 2.3rem;
    .title {
      margin-top: 0.6rem;
      margin-bottom: 0.5rem;
    }
    a {
      color: ${props => props.theme.darkAccent};
    }
    .category {
      margin-left: 10px;
    }
  }
`;

const NewsItem = ({ post }) => (
  <Container className="media">
    <div className="media-content">
      <div className="content">
        <span className="has-text-weight-bold is-uppercase">
          {dayjs(post._createdAt).format('MMMM YYYY')}
        </span>{' '}
        <Link to={`/article/${post.slug.current}`}>
          <h3 className="title is-3 has-text-weight-bold">{post.title}</h3>
        </Link>
        <p>{post.description}</p>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <Link to={`/article/${post.slug.current}`} className="level-item">
            Read
          </Link>
        </div>
      </nav>
    </div>
  </Container>
);

export default NewsItem;

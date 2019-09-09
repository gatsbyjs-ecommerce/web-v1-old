import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NewsItem from '../components/NewsItem';

export const pageQuery = graphql`
  query blog {
    allSanityArticle(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          description
          _createdAt
        }
      }
    }
  }
`;

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

const Blog = ({ data }) => {
  const { edges: posts } = data.allSanityArticle;

  return (
    <Layout>
      <Seo title="News & Updates" />
      <section className="section">
        <Container className="container">
          <h2 className="title is-2 has-text-centered has-text-weight-bold">
            News & Updates
          </h2>
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              {posts.map(({ node: post }) => (
                <NewsItem key={post.id} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;

import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NewsItem from '../components/NewsItem';

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

const NewsUpdates = ({ data }) => {
  const { edges: posts } = data.allMdx;

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

export default NewsUpdates;

export const pageQuery = graphql`
  query newsIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

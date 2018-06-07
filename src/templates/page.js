import React from 'react';
import graphql from 'graphql';

export default ({ data }) => {
  const { contentfulPages: page } = data;
  // console.log('page', page);

  return <div>post page: {page.title}</div>;
};

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
      id
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

import React from 'react';
import graphql from 'graphql';

import Heading from '../components/Heading';
import {HTMLContent} from '../utils/helpers';

export default ({data}) => {
  const {contentfulPages: page} = data;
  // console.log ('page', page);

  return (
    <div className="section">
      <Heading>{page.title}</Heading>
      <HTMLContent content={page.content.childMarkdownRemark.html} />
    </div>
  );
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

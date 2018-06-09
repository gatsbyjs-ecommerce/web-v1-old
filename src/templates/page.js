import React from 'react';
import graphql from 'graphql';

import Heading from '../components/Heading';
import {HTMLContent} from '../utils/helpers';
import SEO from '../components/SEO';
import config from '../config/index';

export default ({data}) => {
  const {contentfulPages: page} = data;
  const metaData = {
    title: page.title,
    description: '',
  };

  return (
    <div className="section">
      <SEO data={metaData} isPage url={`${config.url}/page/${page.slug}`} />
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

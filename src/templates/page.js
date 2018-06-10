import React from 'react';
import graphql from 'graphql';

import config from '../config/index';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import { HTMLContent } from '../utils/helpers';

export default ({ data }) => {
  const { contentfulPages: page } = data;

  return (
    <div className="section">
      <Seo
        title={page.title}
        description=""
        url={`${config.siteUrl}/page/${page.slug}`}
      />
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

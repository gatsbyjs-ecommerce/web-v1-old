import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from './Seo';
import Layout from './Layout';
import Heading from './Heading';

export const articleQuery = graphql`
  query ArticleByPath($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      description
    }
  }
`;

export default class ArticleView extends React.Component {
  render() {
    const { data } = this.props;
    const page = data.sanityArticle;

    return (
      <Layout>
        <Seo
          title={page.title}
          description=""
          url={`${config.siteUrl}/article/${page.slug}`}
        />
        <div className="section">
          <div className="container">
            <Heading>{page.title}</Heading>
            {page.description}
          </div>
        </div>
      </Layout>
    );
  }
}

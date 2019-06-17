import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import ReactGA from 'react-ga';

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import { HTMLContent } from '../utils/helpers';

const pageQuery = graphql`
{
  contentfulPages(slug: {}) {
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

export default class Page extends React.Component {
  componentDidMount() {
    const { contentfulPages: page } = this.props.data;

    ReactGA.pageview(`/page/${page.slug}`);
  }

  render() {
    const { contentfulPages: page } = this.props.data;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <Seo
              title={page.title}
              description=""
              url={`${config.siteUrl}/page/${page.slug}`}
            />
            <StaticQuery
              query={pageQuery}
              render={() => (
                <React.Fragment>
                  <Heading>{page.title}</Heading>
                  <HTMLContent content={page.content.childMarkdownRemark.html} />
                </React.Fragment>
              )}
            />
          </div>
        </section>
      </Layout>
    );
  }
}

// export const pageQuery = graphql`
//   query PageByPath($slug: String!) {
//     contentfulPages(slug: { eq: $slug }) {
//       id
//       title
//       slug
//       content {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `;

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
        content
        # childMarkdownRemark {
        #   html
        # }
      }
    }
    allContentfulPages {
      edges {
        node {
          id
          title
          slug
          content {
            content
            id
          }
        }
      }
    }
  }
`;

export default class Page extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { contentfulPages: page } = this.props.data;

    ReactGA.pageview(`/page/${page.slug}`);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const {
      data: {
        contentfulPages: page,
        allContentfulPages: pages,
        contentfulHome: home,
      },
    } = this.props;
    // const { contentfulPages: page } = this.props.data;

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
              render={data => {
                const items = data.allContentfulPages.edges[0];
                return (
                  <React.Fragment>
                    <Heading>{items.node.title}</Heading>
                    <HTMLContent content={items.node.content.content} />
                  </React.Fragment>
                );
              }}
            />
          </div>
        </section>
      </Layout>
    );
  }
}

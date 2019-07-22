import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';

export const tvUpgradeQuery = graphql`
  query {
    allContentfulTvUpgradeProgram {
      edges {
        node {
          id
          title
          subtitle {
            subtitle
          }
        }
      }
    }
  }
`;

const TvUpgrade = () => (
  <Layout>
    <section className="hero is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <StaticQuery
            query={tvUpgradeQuery}
            render={data => {
              const upgrade = data.allContentfulTvUpgradeProgram.edges[0];
              return (
                <React.Fragment>
                  <h1 className="title">{upgrade.node.title}</h1>
                  <h2 className="subtitle">{upgrade.node.subtitle.subtitle}</h2>
                </React.Fragment>
              );
            }}
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default TvUpgrade;

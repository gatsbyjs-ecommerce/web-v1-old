import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Heading = styled.span`
  border-bottom: 2px solid #3e5beb;
`;

const SubTitle = styled.h2`
  margin-top: 3rem !important;
`;

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
                  <h1 className="title">
                    <Heading>{upgrade.node.title}</Heading>
                  </h1>
                  <SubTitle className="subtitle">
                    {upgrade.node.subtitle.subtitle}
                  </SubTitle>
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

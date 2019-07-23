import React from 'react';
// import graphql from 'graphql';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Layout from '../components/Layout';
import config from '../config/index';
import Seo from '../components/Seo';
import AsideMenu from '../components/AsideMenu';
import SearchBar from '../components/SearchBar';
import Container from '../components/Container';

const Section = styled.section`
  padding: 0rem 1.5rem !important;
`;

export default class Shop extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/shop');
  }

  render() {
    return (
      <Layout>
        <Section className="section">
          <div className="container">
            <Seo
              title="shop"
              description="Get the best products"
              url={`${config.siteUrl}/shop`}
            />
            <div className="columns">
              <div className="column is-3">
                <AsideMenu />
              </div>
              <div className="column">
                <SearchBar />
                <Container>
                  <h1 className="title">Our Products</h1>
                  {/* TrendingItems component render here */}
                </Container>
                <Container>
                  <h1 className="title">TV Accessories</h1>
                  {/* New contentful field required */}
                </Container>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}

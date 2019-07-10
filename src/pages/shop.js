import React from 'react';
// import graphql from 'graphql';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Layout from '../components/Layout';
import config from '../config/index';
import Seo from '../components/Seo';
import ShopItems from '../components/ShopItems';

const Container = styled.section`
  padding: 0rem 1.5rem !important;
`;

export default class Shop extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/shop');
  }

  render() {
    // const { data } = this.props;
    // const shop = data.allContentfulSidebarOptions;

    return (
      <Layout>
        <Container className="section">
          <div className="container">
            <Seo
              title="shop"
              description="Get the best details"
              url={`${config.siteUrl}/shop`}
            />
            <ShopItems />
          </div>
        </Container>
      </Layout>
    );
  }
}

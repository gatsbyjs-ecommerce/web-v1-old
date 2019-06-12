import React from 'react';
// import graphql from 'graphql';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Layout from '../components/Layout';
import config from '../config/index';
import Seo from '../components/Seo';
import ShopBodyItems from '../components/ShopBodyItems';
import ShopProducts from '../components/ShopProducts';

const Container = styled.section`
  padding: 0rem 1.5rem !important;
`;

export default class Shop extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/shop');
  }

  render() {
    // const { data } = this.props;
    // const coupons = data.allContentfulCoupons.edges;

    return (
      <Layout>
        <Container className="section">
          <div className="container">
            <Seo
              title="shop"
              description="Get the best details"
              url={`${config.siteUrl}/shop`}
            />
            <ShopBodyItems />
            <ShopProducts />
            {/* <Heading>Coupons</Heading> */}
            {/* {coupons.map(coupon => (
            <div key={coupon.node.id} className="columns  is-multiline">
              <div className="column is-one-third">
                <CouponItem data={coupon.node} /> */}
          </div>
        </Container>
      </Layout>
    );
  }
}

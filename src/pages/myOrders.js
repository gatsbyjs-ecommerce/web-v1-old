import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import config from '../config/index';
import TrendingItems from '../components/TrendingItems';

const Container = styled.div`
  .columns {
    justify-content: center;
  }
`;

const Items = styled.p`
  margin-right: 2rem;
`;

const MyOrders = () => (
  <Layout>
    <Container className="section">
      <div className="container">
        <Seo
          title="My Orders"
          description="Your order history"
          url={`${config.siteUrl}/myOrders`}
        />
        <Heading>My Orders</Heading>
        <div className="columns">
          <div className="column is-half has-text-centered">
            <p className="is-uppercase has-text-weight-bold">
              order number: op16300
            </p>
            <p>Placed On: Tuesday, 23 July, 2019</p>
            <div className="is-inline-flex">
              <Items>
                ITEM: <span className="has-text-weight-bold">2</span>
              </Items>
              <p>
                TOTAL: <span className="has-text-weight-bold">$150</span>
              </p>
            </div>
            <p>Items will display here</p>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default MyOrders;

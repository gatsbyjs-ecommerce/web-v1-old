import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import config from '../config/index';
import MyOrderItem from '../components/MyOrderItem';

const Container = styled.div`
  .columns {
    justify-content: center;
  }
`;

const MyOrders = () => (
  <Layout>
    <Container className="section">
      <div className="container">
        <Seo
          title="My Orders"
          description="Your order history"
          url={`${config.siteUrl}/myOrders`}
          keywords="my orders"
        />
        <Heading>My Orders</Heading>
        <MyOrderItem />
        <MyOrderItem />
        <MyOrderItem />
        <MyOrderItem />
      </div>
    </Container>
  </Layout>
);

export default MyOrders;

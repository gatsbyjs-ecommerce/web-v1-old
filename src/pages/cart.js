import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CartSteps from '../components/CartSteps';

const Cart = () => {
  return (
    <Layout>
      <Seo
        title="Cart"
        description="Your order items"
        url={`${config.siteUrl}/cart`}
      />
      <CartSteps />
    </Layout>
  );
};

export default Cart;

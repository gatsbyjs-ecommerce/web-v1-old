import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import CouponItem from '../components/CouponItem';

export const couponsQuery = graphql`
  query Coupons {
    allSanityCoupon {
      edges {
        node {
          id
          title
          expiryDate
          discountPercentage
          description
          code
        }
      }
    }
  }
`;

export default class Coupons extends React.Component {
  render() {
    const { data } = this.props;
    const coupons = data.allSanityCoupon.edges;

    return (
      <Layout>
        <Seo
          title="Coupons"
          description="Get a best detals"
          url={`${config.siteUrl}/coupons`}
        />
        <div className="section">
          <div className="container">
            <Heading>Coupons</Heading>
            <div className="columns is-multiline">
              {coupons.map(coupon => (
                <div key={coupon.node.id} className="column is-one-third">
                  <CouponItem data={coupon.node} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

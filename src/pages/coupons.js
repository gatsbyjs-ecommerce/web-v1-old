import React from 'react';
import graphql from 'graphql';

import Heading from '../components/Heading';
import CouponItem from '../components/CouponItem';
import SEO from '../components/SEO';
import config from '../config/index';

export default ({data}) => {
  const coupons = data.allContentfulCoupons.edges;
  const metaData = {
    title: 'Coupons | Sejal Suits',
    description: 'Get a Best Deal',
  };
  return (
    <div className="section">
      <SEO data={metaData} isPage url={`${config.url}/coupons`} />
      <Heading>Coupons</Heading>
      {coupons.map (coupon => (
        <div key={coupon.node.id} className="columns  is-multiline">
          <div className="column is-one-third">
            <CouponItem data={coupon.node} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query Coupons {
    allContentfulCoupons {
      edges {
        node {
          id
          name
          code
          expiryDate
          details {
            details
          }
        }
      }
    }
  }
`;

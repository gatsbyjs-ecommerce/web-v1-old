import React from 'react';
import graphql from 'graphql';

import Heading from '../components/Heading';
import CouponItem from '../components/CouponItem';

export default ({data}) => {
  const coupons = data.allContentfulCoupons.edges;

  return (
    <div className="section">
      <Heading>Coupons</Heading>
      {coupons.map (coupon => (
        <div className="columns  is-multiline">
          <div className="column is-one-third">
            <CouponItem key={coupon.node.id} data={coupon.node} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query Coupons {
    allContentfulCoupons{
    edges{
      node{
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

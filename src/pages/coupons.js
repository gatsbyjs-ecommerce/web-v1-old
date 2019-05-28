import React from 'react';
import { graphql } from 'gatsby'
import ReactGA from 'react-ga';

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import CouponItem from '../components/CouponItem';

export default class Coupons extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/coupons');
  }

  render() {
    const { data } = this.props;
    const coupons = data.allContentfulCoupons.edges;

    return (
      <div className="section">
        <Seo
          title="Coupons"
          description="Get a best detals"
          url={`${config.siteUrl}/coupons`}
        />
        <Heading>Coupons</Heading>
        {coupons.map(coupon => (
          <div key={coupon.node.id} className="columns  is-multiline">
            <div className="column is-one-third">
              <CouponItem data={coupon.node} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// export const couponsQuery = graphql`
//   query Coupons {
//     allContentfulCoupons {
//       edges {
//         node {
//           id
//           name
//           code
//           expiryDate
//           details {
//             details
//           }
//         }
//       }
//     }
//   }
// `;

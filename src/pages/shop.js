import React from 'react';
// import graphql from 'graphql';
import ReactGA from 'react-ga';

import config from '../config/index';
import Seo from '../components/Seo';
import AsideMenu from '../components/AsideMenu';
import FilterBar from '../components/FilterBar';
// import Heading from '../components/Heading';
// import CouponItem from '../components/CouponItem';

export default class Coupons extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/coupons');
  }

  render() {
    // const { data } = this.props;
    // const coupons = data.allContentfulCoupons.edges;

    return (
      <div className="section">
        <Seo
          title="shop"
          description="Get the best details"
          url={`${config.siteUrl}/shop`}
        />
        <div className="is-flex">
          <AsideMenu />
          <FilterBar />
        </div>
        {/* <Heading>Coupons</Heading> */}
        {/* {coupons.map(coupon => (
          <div key={coupon.node.id} className="columns  is-multiline">
            <div className="column is-one-third">
              <CouponItem data={coupon.node} />
            </div>
          </div>
        ))} */}
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

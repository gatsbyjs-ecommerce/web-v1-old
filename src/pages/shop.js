import React from 'react';
// import graphql from 'graphql';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import config from '../config/index';
import Seo from '../components/Seo';
import ShopHeader from '../components/ShopHeader';
import ShopProducts from '../components/ShopProducts';

// import Heading from '../components/Heading';
// import CouponItem from '../components/CouponItem';

const Container = styled.section`
  padding: 0rem 1.5rem !important;
`;

export default class Coupons extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/coupons');
  }

  render() {
    // const { data } = this.props;
    // const coupons = data.allContentfulCoupons.edges;

    return (
      <Container className="section">
        <div className="container">
          <Seo
            title="shop"
            description="Get the best details"
            url={`${config.siteUrl}/shop`}
          />
          <ShopHeader />
          <ShopProducts />
          {/* <Heading>Coupons</Heading> */}
          {/* {coupons.map(coupon => (
            <div key={coupon.node.id} className="columns  is-multiline">
              <div className="column is-one-third">
                <CouponItem data={coupon.node} />
              </div>
            </Container>
          ))} */}
        </div>
      </Container>
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

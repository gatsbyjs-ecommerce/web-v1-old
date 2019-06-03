import React from 'react';
import { graphql } from 'gatsby'
import ReactGA from 'react-ga';
import styled from 'styled-components';

import config from '../config/index';
import Seo from '../components/Seo';
import AsideMenu from '../components/AsideMenu';
import FilterBar from '../components/FilterBar';
import TopProductsCard from '../components/TopProductsCard';
import ShoppingItems from '../components/ShoppingItems';
import ProductsTitleHeader from '../components/ProductsTitleHeader';
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
          <div className="columns">
            <div className="column is-3">
              <AsideMenu />
            </div>
            <div className="column is-hidden-mobile">
              <FilterBar />
              <div className="columns is-flex">
                <div className="column">
                  <ShoppingItems />
                  <ShoppingItems />
                  <ShoppingItems />
                </div>
                <div className="column">
                  <ShoppingItems />
                  <ShoppingItems />
                  <ShoppingItems />
                </div>
                <div className="column">
                  <ShoppingItems />
                  <ShoppingItems />
                  <ShoppingItems />
                </div>
              </div>
            </div>
            <div className="columns is-hidden-tablet">
              <div className="column">
                <ShoppingItems />
                <ShoppingItems />
                <ShoppingItems />
              </div>
              <div className="column">
                <ShoppingItems />
                <ShoppingItems />
                <ShoppingItems />
              </div>
              <div className="column">
                <ShoppingItems />
                <ShoppingItems />
                <ShoppingItems />
              </div>
            </div>
          </div>
          <div>
            <ProductsTitleHeader desc="Popular Item in the market" text="Top" label="Products" />
          </div>
          <div className="columns is-flex">
            <div className="column">
              <TopProductsCard />
            </div>
            <div className="column">
              <TopProductsCard />
            </div>
            <div className="column">
              <TopProductsCard />
            </div>
            <div className="column">
              <TopProductsCard />
            </div>
          </div>
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

import React from 'react';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby';

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
// import DiscountOffer from '../components/DiscountOffer';
import Subscription from '../components/Subscription';
import TrendingItems from '../components/TrendingItems';
import ProductsTitleHeader from '../components/ProductsTitleHeader';
import WhyUs from '../components/WhyUs';
import AvailableLocations from '../components/AvailableLocations';
import BrandItems from '../components/BrandItems';

export const indexQuery = graphql`
  query Products {
    allContentfulProduct(
      limit: 6
      filter: { status: { eq: "active" } }
      sort: { fields: [listingOrder], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
          color
          originalPrice
          discountPrice
          featuredImage {
            title
            sizes(maxWidth: 550) {
              ...GatsbyContentfulSizes
            }
          }
          category {
            slug
          }
          brand {
            slug
          }
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/');
  }

  render() {
    return (
      <Layout>
        <Seo
          title="Purchase all kind of printers "
          description="Your Printing Solutions"
          keywords="featured products, Priniting devices"
          url={config.siteUrl}
        />
        <StaticQuery
          query={indexQuery}
          render={data => {
            const { allContentfulProduct: products } = data;
            return (
              <React.Fragment>
                <ProductsTitleHeader
                  padding="0 1rem"
                  text="Featured"
                  label="Products"
                />
                <Hero />
                <ProductsTitleHeader container margin text="Why" label="Us" />
                <WhyUs />
                <ProductsTitleHeader container margin text="Locations" />
                <AvailableLocations />
                <ProductsTitleHeader
                  container
                  margin
                  text="Latest"
                  label="Products"
                />
                <section className="section">
                  <div className="container">
                    <TrendingItems products={products.edges} />
                  </div>
                </section>
                {/* <DiscountOffer home={home} /> */}
                <Subscription />
                <ProductsTitleHeader
                  container
                  margin
                  text="Our"
                  label="Brands"
                />
                <BrandItems />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}

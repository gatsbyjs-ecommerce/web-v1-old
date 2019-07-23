import React from 'react';
// import graphql from 'graphql';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import config from '../config/index';
import Seo from '../components/Seo';
import AsideMenu from '../components/AsideMenu';
import SearchBar from '../components/SearchBar';
import ProductsTitleHeader from '../components/ProductsTitleHeader';
import TrendingItems from '../components/TrendingItems';

const Section = styled.section`
  padding: 0rem 1.5rem !important;
`;

export const shopQuery = graphql`
  query {
    allContentfulProduct(
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
        }
      }
    }
    contentfulHome {
      homeSliderTitle
      homeSliderSubTitle
      homeSliderImage {
        title
        sizes(maxWidth: 550) {
          ...GatsbyContentfulSizes
        }
      }
      homeIntro {
        childMarkdownRemark {
          html
        }
      }
    }
    allDataJson {
      edges {
        node {
          CAD_USD {
            val
          }
          CAD_INR {
            val
          }
        }
      }
    }
  }
`;

export default class Shop extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/shop');
  }

  render() {
    return (
      <Layout>
        <Section className="section">
          <div className="container">
            <Seo
              title="shop"
              description="Get the best products"
              url={`${config.siteUrl}/shop`}
            />
            <div className="columns">
              <div className="column is-3">
                <AsideMenu />
              </div>
              <div className="column">
                <SearchBar />
                <ProductsTitleHeader text="Our" label="Products" />
                <StaticQuery
                  query={shopQuery}
                  render={data => {
                    const { allContentfulProduct: products } = data;
                    return (
                      <React.Fragment>
                        <TrendingItems products={products.edges} />
                      </React.Fragment>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}

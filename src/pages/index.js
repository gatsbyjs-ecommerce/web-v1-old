import React from 'react';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby';

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DiscountOffer from '../components/DiscountOffer';
import Subscription from '../components/Subscription';
import TrendingItems from '../components/TrendingItems';
import ProductsTitleHeader from '../components/ProductsTitleHeader';

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

      heroTitle
      heroSubtitle
      heroDescription {
        heroDescription
      }
      discountTitile
      discountSubtitle
      discountDescription
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

export default class IndexPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/');
  }

  render() {
    return (
      <Layout>
        <Seo
          title="Purchase all kind of smart home devices and TVs"
          description="Your Smart Home Solutions"
          keywords="featured products, smart home devices, TV Accessories"
          url={config.siteUrl}
        />
        <StaticQuery
          query={indexQuery}
          render={data => {
            const {
              allContentfulProduct: products,
              contentfulHome: home,
            } = data;
            return (
              <React.Fragment>
                <Hero home={home} />
                <ProductsTitleHeader margin text="Latest" label="Products" />
                <TrendingItems products={products.edges} />
                <DiscountOffer home={home} />
                <Subscription />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}

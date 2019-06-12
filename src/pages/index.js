import React from 'react';
import ReactGA from 'react-ga';
// import { first } from 'underscore';
import { StaticQuery, graphql } from 'gatsby'

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DiscountOffer from '../components/DiscountOffer';
import SubscriptionForm from '../components/SubscriptionForm';
import TrendingItems from '../components/TrendingItems';
// import Slider from '../components/Slider';
// import BestSeller from '../components/BestSeller';
// import HomeBanner from '../components/HomeBanner';

export const indexQuery = graphql`
  query Products {
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
          GBP_CAD {
            val
          }
          GBP_INR {
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
          title="Latest punjabi suits collection"
          description="Latest Punjabi Traditional Suits"
          url={config.siteUrl}
        />
        <StaticQuery
          query={indexQuery}
          render={(data) => {
            const {
              allContentfulProduct: products, contentfulHome: home,
            } = data;

            return (
              <React.Fragment>
                <Hero />
                {/* <Slider /> ) */}
                <TrendingItems products={products.edges} />
                <DiscountOffer />
                {/* <BestSeller /> */}
                <SubscriptionForm />
                {/* <HomeBanner data={home} /> */}
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}

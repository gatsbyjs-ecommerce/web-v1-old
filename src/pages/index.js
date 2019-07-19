import React from 'react';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import swal from 'sweetalert';

import config from '../config/index';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DiscountOffer from '../components/DiscountOffer';
import SubscriptionForm from '../components/SubscriptionForm';
import TrendingItems from '../components/TrendingItems';

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

const subscribeMutation = gql`
  mutation subscribe($email: String!) {
    subscribe(email: $email) {
      email
    }
  }
`;

export default class IndexPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/');
  }

  onSuccess = () => {
    swal('You have successfully subscribed!');
  };

  render() {
    return (
      <Layout>
        <Seo
          title="home"
          description="Your Smart Home Solutions"
          url={config.siteUrl}
        />
        <StaticQuery
          query={indexQuery}
          render={data => {
            const { allContentfulProduct: products } = data;
            return (
              <React.Fragment>
                <Hero />
                <TrendingItems products={products.edges} />
                <DiscountOffer />
                <Mutation
                  mutation={subscribeMutation}
                  update={this.onSuccess}
                  onError={error => {
                    swal(
                      'Issue!',
                      error.message.replace('GraphQL error: ', ''),
                      'warning',
                    );
                  }}>
                  {subscription => (
                    <SubscriptionForm
                      handleUpdate={dataNew => {
                        return subscription({
                          variables: dataNew,
                        });
                      }}
                    />
                  )}
                </Mutation>
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}

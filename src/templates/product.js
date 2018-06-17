/* global window */

import React from 'react';
import graphql from 'graphql';
import styled from 'styled-components';

import Seo from '../components/Seo';
import config from '../config/index';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import CheckoutForm from '../components/CheckoutForm';
import PaymentForm from '../components/PaymentForm';
import PaymentConfirmed from '../components/PaymentConfirmed';
import ProductsList from '../components/ProductsList';

const Container = styled.div`
  &&& {
    margin-top: 3rem;
  }
`;

class Product extends React.Component {
  render() {
    const { activeStep, paymentData, userData } = this.state;
    const {
      data: {
        contentfulProduct: product,
        allContentfulProduct: products,
        contentfulHome: home,
      },
    } = this.props;
    // console.log('product', product);

    const metaImage = product.featuredImage
      ? product.featuredImage.sizes.src
      : `${config.url}${config.logo}`;

    return (
      <React.Fragment>
        <Seo
          title={product.title}
          description={product.shortDetails.shortDetails}
          url={`${config.siteUrl}/product/${product.slug}`}
          image={metaImage}
          isProduct
        />
        <div>
          <Container className="columns">
            <div className="column is-two-fifths">
              <ProductGallery product={product} />
            </div>
            <div className="column section">
              <ProductInfo
                home={home}
                product={product}
                handleCheckout={() => this.setState({ activeStep: 2 })}
              />
              {activeStep === 2 && (
                <CheckoutForm
                  product={product}
                  handlePayment={data =>
                    this.setState({ activeStep: 3, userData: data })
                  }
                />
              )}
              {activeStep === 3 && (
                <PaymentForm
                  product={product}
                  userData={userData}
                  handlePayment={data =>
                    this.setState({ activeStep: 4, paymentData: data })
                  }
                />
              )}
              {activeStep === 4 && (
                <PaymentConfirmed product={product} paymentData={paymentData} />
              )}
            </div>
          </Container>
        </div>
        <ProductsList title="We think you'll" products={products.edges} />
      </React.Fragment>
    );
  }
}

export default Product;

export const productQuery = graphql`
  query ProductByPath($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      title
      slug
      originalPrice
      discountPrice
      shippingCost
      color
      productCode
      featuredImage {
        title
        sizes(maxWidth: 550) {
          ...GatsbyContentfulSizes
        }
      }
      otherImages {
        id
        title
        sizes(maxWidth: 1200) {
          ...GatsbyContentfulSizes
        }
      }
      shortDetails {
        shortDetails
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulProduct(
      filter: { status: { eq: "active" }, slug: { ne: $slug } }
      limit: 3
      sort: { fields: [createdAt], order: DESC }
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
      productDeliveryInfo {
        childMarkdownRemark {
          html
        }
      }
      productShippingReturns {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

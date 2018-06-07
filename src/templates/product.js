/* global window */

import React from 'react';
import graphql from 'graphql';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import { isUndefined } from 'underscore';
import { Spring, animated } from 'react-spring';
import Helmet from 'react-helmet';

import ProductsList from '../components/ProductsList';
import ProductInfo from '../components/ProductInfo';
import CheckoutForm from '../components/CheckoutForm';
import PaymentForm from '../components/PaymentForm';
import PaymentConfirmed from '../components/PaymentConfirmed';

const Container = styled.div`
  &&& {
    margin-top: 3rem;
  }
`;

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      activeStep: 1,
      userData: null,
      paymentData: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 400);
  }

  render() {
    const { activeStep, isVisible, paymentData, userData } = this.state;
    const {
      data: {
        contentfulProduct: product,
        allContentfulProduct: products,
        contentfulHome: home,
      },
    } = this.props;

    const isMobile = !isUndefined(global.window)
      ? global.window.innerWidth < 768
      : false;

    const images = product.otherImages.map(image => ({
      original: image.sizes.src,
      thumbnail: image.sizes.src,
    }));

    return (
      <React.Fragment>
        <Helmet title={`${product.title} | Sejal Suits`} />
        <Container className="columns">
          <div className="column is-two-fifths">
            <Spring
              native
              from={{ opacity: 0, marginLeft: -100 }}
              to={{
                opacity: isVisible ? 1 : 0,
                marginLeft: isVisible ? 0 : -100,
              }}
            >
              {styles => (
                <animated.div style={styles}>
                  <ImageGallery
                    items={images}
                    thumbnailPosition="bottom"
                    showPlayButton={false}
                    showNav={false}
                    showThumbnails={!isMobile}
                    showFullscreenButton={!isMobile}
                    showBullets={isMobile}
                  />
                </animated.div>
              )}
            </Spring>
          </div>
          <div className="column section">
            {activeStep === 1 && (
              <ProductInfo
                home={home}
                product={product}
                handleCheckout={() => this.setState({ activeStep: 2 })}
              />
            )}
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
      otherImages {
        id
        title
        sizes(maxWidth: 1200) {
          ...GatsbyContentfulSizes
        }
      }
      shortDetails {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulProduct(
      filter: { status: { eq: "active" }, slug: { ne: $slug } }
      limit: 3
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

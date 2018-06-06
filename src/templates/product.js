/* global window */

import React from 'react';
import graphql from 'graphql';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import { isUndefined } from 'underscore';
import { Spring, animated } from 'react-spring';

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

const images = [
  {
    original:
      'https://images.ctfassets.net/o6uhtcakujse/4ZT5eQovFm0EM4C4CUi82c/7001ed809d4dab28f3495375468cfce3/Shara_22001.jpg?q=75&h=900',
    thumbnail:
      'https://images.ctfassets.net/o6uhtcakujse/4ZT5eQovFm0EM4C4CUi82c/7001ed809d4dab28f3495375468cfce3/Shara_22001.jpg?q=75&h=150',
  },
  {
    original:
      'https://images.ctfassets.net/o6uhtcakujse/4ZT5eQovFm0EM4C4CUi82c/7001ed809d4dab28f3495375468cfce3/Shara_22001.jpg?q=75&h=900',
    thumbnail:
      'https://images.ctfassets.net/o6uhtcakujse/4ZT5eQovFm0EM4C4CUi82c/7001ed809d4dab28f3495375468cfce3/Shara_22001.jpg?q=75&h=150',
  },
];

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
    const { activeStep, isVisible } = this.state;
    const {
      data: { contentfulProduct: product },
    } = this.props;
    const isMobile = !isUndefined(global.window)
      ? global.window.innerWidth < 768
      : false;
    console.log('product', product);

    return (
      <React.Fragment>
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
                product={product}
                handleCheckout={() => this.setState({ activeStep: 2 })}
              />
            )}
            {activeStep === 2 && (
              <CheckoutForm
                handlePayment={userData =>
                  this.setState({ activeStep: 3, userData })
                }
              />
            )}
            {activeStep === 3 && (
              <PaymentForm
                handlePayment={paymentData =>
                  this.setState({ activeStep: 4, paymentData })
                }
              />
            )}
            {activeStep === 4 && <PaymentConfirmed />}
          </div>
        </Container>
        <ProductsList title="We think you'll" limit={3} />
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
      status
      originalPrice
      discountPrice
      shippingCost
      color
      rating
      productCode
      featuredImage {
        id
      }
      otherImages {
        id
      }
      shortDetails {
        id
      }
      longDetails {
        id
      }
    }
  }
`;

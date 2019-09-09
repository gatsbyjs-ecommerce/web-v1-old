/* eslint no-underscore-dangle: 0 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navigateTo } from 'gatsby';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import { Spring, animated } from 'react-spring';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';

import config from '../utils/config';
import { formatCurrency } from '../utils/helpers';
import { BlockContent } from './Content';
import Heading from './Heading';

// const cartQuery = graphql`
//   query {
//     cart @client {
//       __typename
//       items
//       count
//     }
//   }
// `;

const Price = styled.div`
  color: ${config.primaryColor};
  font-size: 1.5rem;
  margin-top: -2rem;
  span {
    color: #4a4a4a;
    font-size: 1rem;
    text-decoration: line-through;
    font-weight: light;
  }
`;

const BuyBtn = styled.button`
  width: 100%;
  margin-top: 3rem;
`;

const AccordionStyled = styled(Accordion)`
  margin-top: 3rem;
  .accordion__title {
    border-bottom: 1px solid #979797;
    padding: 0.9rem 0;
    cursor: pointer;
    :focus {
      outline: none;
    }
    h3 {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
  .accordion__body {
    display: block;
    padding: 1rem 0;
  }
  .accordion__body--hidden {
    display: none;
  }
`;

const ProductCode = styled.p`
  color: #b5b5b5 !important;
`;

const ShareContainer = styled.div`
  padding: 0.9rem 0;
  border-top: 1px solid #979797;
  h3 {
    text-transform: uppercase;
    font-weight: 700;
    float: left;
  }
  .share-icons {
    float: right;
    width: 110px;
    .level-item {
      margin-left: 0.3rem;
    }
  }
  svg {
    color: #4a4a4a;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const cartQuery = gql`
  query CartItems {
    cartItems @client {
      id
    }
  }
`;

const ProductInfo = ({ product, home }) => {
  const [isVisible, setIsVisible] = useState(false);
  const client = useApolloClient();
  const { data } = useQuery(cartQuery);
  const { cartItems } = data || {};
  // console.log('product', product);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 400);
  }, []);

  const metaUrl = `${config.siteUrl}/product/${product.slug.current}`;
  const metaTitle = `Checkout ${product.title} at SejalSuits`;

  const addToCart = () => {
    // console.log('cartItems', cartItems);
    const items = cartItems || [];

    const itemData = {
      id: product._id,
      sku: product.variant.sku,
      title: product.title,
      price: product.variant.price,
      image: product.variant.featuredImage.asset.fluid.src,
      quantity: 1,
      __typename: 'CartItem',
    };
    items.push(itemData);

    client.writeData({ data: { cartItems: items } });

    setTimeout(() => navigateTo('/cart'), 600);
  };

  return (
    <>
      <Heading>{product.title}</Heading>
      <Price className="has-text-weight-semibold has-text-centered">
        {formatCurrency(product.variant.discountPrice)}{' '}
        {product.variant.discountPrice < product.variant.price && (
          <span>{formatCurrency(product.variant.price)}</span>
        )}
      </Price>
      <Spring native from={{ opacity: 0 }} to={{ opacity: isVisible ? 1 : 0 }}>
        {stylesProps => (
          <animated.div style={stylesProps}>
            <BuyBtn
              className="product-info-btn button is-dark is-large is-radiusless is-uppercase"
              onClick={() => addToCart()}>
              Add to cart
            </BuyBtn>
            <AccordionStyled>
              <AccordionItem expanded>
                <AccordionItemTitle>
                  <h3>Product Details</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  {product._rawBody && (
                    <BlockContent blocks={product._rawBody.en || []} />
                  )}
                  {/* <HTMLContent
                    content={product.shortDetails.childMarkdownRemark.html}
                  /> */}
                  <p>Color: {product.variant.color}</p>
                  <p>Made in India</p>
                  <p>All prices include sales taxes and free UK delivery.</p>
                  <ProductCode>Product Code: {product.variant.sku}</ProductCode>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Delivery & Returns</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  {home.productDeliveryInfo}
                  <br />
                  {home.productShippingReturns}
                </AccordionItemBody>
              </AccordionItem>
            </AccordionStyled>
            <ShareContainer>
              <h3>Share</h3>
              <div className="share-icons">
                <div className="level">
                  <div className="level-item">
                    <FacebookShareButton
                      url={metaUrl}
                      quote={metaTitle}
                      hashtag="#sejalsuits">
                      <i className="fab fa-facebook-square" />
                    </FacebookShareButton>
                  </div>
                  <div className="level-item">
                    <TwitterShareButton
                      url={metaUrl}
                      title={metaTitle}
                      hashtags={['sejalsuits', 'punjabisuits']}>
                      <i className="fab fa-twitter-square" />
                    </TwitterShareButton>
                  </div>
                  <div className="level-item">
                    <EmailShareButton url={metaUrl} subject={metaTitle}>
                      <i className="fas fa-envelope" />
                    </EmailShareButton>
                  </div>
                </div>
              </div>
            </ShareContainer>
          </animated.div>
        )}
      </Spring>
    </>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
};

export default ProductInfo;

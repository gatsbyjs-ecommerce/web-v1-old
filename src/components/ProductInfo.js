/* global $ */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Query, ApolloConsumer } from 'react-apollo';
import { navigateTo } from 'gatsby-link';
import gql from 'graphql-tag';
import ReactGA from 'react-ga';
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
  PinterestShareButton,
  EmailShareButton,
} from 'react-share';

import config from '../config';
import { formatCurrency, HTMLContent } from '../utils/helpers';
import Heading from '../components/Heading';

const cartQuery = gql`
  query {
    cart @client {
      __typename
      items
      count
    }
  }
`;

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

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 400);
  }

  handleAddToCart(client, data) {
    $('.product-info-btn').addClass('is-loading');

    const { product } = this.props;
    const newCart = { ...data.cart };
    let items = JSON.parse(newCart.items);
    items = items !== null ? items : [];

    // log to google analytics
    ReactGA.plugin.execute('ecommerce', 'addItem', {
      id: product.id,
      name: product.title,
      sku: product.productCode,
      price: product.discountPrice,
      quantity: 1,
    });

    newCart.count = items.length + 1;
    items.push({
      id: product.id.slice(1),
      productCode: product.productCode,
      title: product.title,
      price: product.discountPrice,
      image: product.featuredImage,
      quantity: 1,
    });
    newCart.items = JSON.stringify(items);
    client.writeData({
      data: {
        cart: newCart,
      },
    });
    setTimeout(() => navigateTo('/cart'), 600);
  }

  render() {
    const { isVisible } = this.state;
    const { product, home } = this.props;

    const metaUrl = `${config.siteUrl}/product/${product.slug}`;
    const metaTitle = `Checkout ${product.title} at SejalSuits`;
    const metaImage = product.featuredImage
      ? product.featuredImage.sizes.src
      : `${config.url}${config.logo}`;

    return (
      <React.Fragment>
        <Heading>{product.title}</Heading>
        <Price className="has-text-weight-semibold has-text-centered">
          {formatCurrency(product.discountPrice)}{' '}
          {product.discountPrice < product.originalPrice && (
            <span>{formatCurrency(product.originalPrice)}</span>
          )}
        </Price>
        <Spring
          native
          from={{ opacity: 0 }}
          to={{ opacity: isVisible ? 1 : 0 }}
        >
          {stylesProps => (
            <animated.div style={stylesProps}>
              <Query query={cartQuery}>
                {({ data }) => (
                  <ApolloConsumer>
                    {client => (
                      <BuyBtn
                        className="product-info-btn button is-dark is-large is-radiusless is-uppercase"
                        onClick={() => this.handleAddToCart(client, data)}
                      >
                        Add to cart
                      </BuyBtn>
                    )}
                  </ApolloConsumer>
                )}
              </Query>

              <AccordionStyled>
                <AccordionItem expanded>
                  <AccordionItemTitle>
                    <h3>Product Details</h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <HTMLContent
                      content={product.shortDetails.childMarkdownRemark.html}
                    />
                    <p>Color: {product.color}</p>
                    <p>Made in India</p>
                    <p>All prices include sales taxes and free Canada delivery.</p>
                    <ProductCode>
                      Product Code: {product.productCode}
                    </ProductCode>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>Delivery & Returns</h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <HTMLContent
                      content={
                        home.productDeliveryInfo.childMarkdownRemark.html
                      }
                    />
                    <br />
                    <HTMLContent
                      content={
                        home.productShippingReturns.childMarkdownRemark.html
                      }
                    />
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
                        hashtag="#sejalsuits"
                      >
                        <i className="fab fa-facebook-square" />
                      </FacebookShareButton>
                    </div>
                    <div className="level-item">
                      <TwitterShareButton
                        url={metaUrl}
                        title={metaTitle}
                        hashtags={['sejalsuits', 'punjabisuits']}
                      >
                        <i className="fab fa-twitter-square" />
                      </TwitterShareButton>
                    </div>
                    <div className="level-item">
                      <PinterestShareButton
                        url={metaUrl}
                        media={metaImage}
                        description={metaTitle}
                      >
                        <i className="fab fa-pinterest-square" />
                      </PinterestShareButton>
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
      </React.Fragment>
    );
  }
}

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
};

export default ProductInfo;

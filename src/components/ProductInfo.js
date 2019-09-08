import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Query, ApolloConsumer } from 'react-apollo';
import { navigateTo, graphql } from 'gatsby';
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
    // $('.product-info-btn').addClass('is-loading');

    const { product } = this.props;
    const newCart = { ...data.cart };
    let items = JSON.parse(newCart.items);
    items = items !== null ? items : [];

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

    const metaUrl = `${config.siteUrl}/product/${product.slug.current}`;
    const metaTitle = `Checkout ${product.title} at SejalSuits`;
    // const metaImage = product.featuredImage
    //   ? product.featuredImage.sizes.src
    //   : `${config.url}${config.logo}`;

    return (
      <>
        <Heading>{product.title}</Heading>
        <Price className="has-text-weight-semibold has-text-centered">
          {formatCurrency(product.variant.discountPrice)}{' '}
          {product.variant.discountPrice < product.variant.price && (
            <span>{formatCurrency(product.variant.price)}</span>
          )}
        </Price>
        <Spring
          native
          from={{ opacity: 0 }}
          to={{ opacity: isVisible ? 1 : 0 }}>
          {stylesProps => (
            <animated.div style={stylesProps}>
              <BuyBtn
                className="product-info-btn button is-dark is-large is-radiusless is-uppercase"
                onClick={() => console.log('add')}>
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
                    <ProductCode>
                      Product Code: {product.variant.sku}
                    </ProductCode>
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
            </animated.div>
          )}
        </Spring>
      </>
    );
  }
}

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
};

export default ProductInfo;

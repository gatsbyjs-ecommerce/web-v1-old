/* global $ */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {first} from 'underscore';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import {Spring, animated} from 'react-spring';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
} from 'react-share';

import config from '../config';
import {formatCurrency, HTMLContent} from '../utils/helpers';
import Heading from '../components/Heading';

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

const AccordionStyled = styled (Accordion)`
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
    cursor:pointer;
  }
`;

class ProductInfo extends React.Component {
  constructor (props) {
    super (props);

    this.state = {isVisible: false};
  }

  componentDidMount () {
    setTimeout (() => {
      this.setState ({isVisible: true});
    }, 400);
  }

  handleSubmit = () => {
    const {handleCheckout} = this.props;

    $ ('.product-info-btn').addClass ('is-loading');
    setTimeout (handleCheckout, 350);
  };

  render () {
    const {isVisible} = this.state;
    const {product, home} = this.props;

    return (
      <React.Fragment>
        <Heading>{product.title}</Heading>
        <Price className="has-text-weight-semibold has-text-centered">
          {formatCurrency (product.discountPrice)}{' '}
          {product.discountPrice < product.originalPrice &&
            <span>{formatCurrency (product.originalPrice)}</span>}
        </Price>
        <Spring native from={{opacity: 0}} to={{opacity: isVisible ? 1 : 0}}>
          {stylesProps => (
            <animated.div style={stylesProps}>
              <BuyBtn
                className="product-info-btn button is-dark is-large is-radiusless is-uppercase"
                onClick={this.handleSubmit}
              >
                Add to bag
              </BuyBtn>
              <AccordionStyled>
                <AccordionItem expanded>
                  <AccordionItemTitle>
                    <h3>Product Details</h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <HTMLContent
                      content={product.shortDetails.childMarkdownRemark.html}
                    />
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>Delivery information</h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <HTMLContent
                      content={
                        home.productDeliveryInfo.childMarkdownRemark.html
                      }
                    />
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>Shipping & returns</h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
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
                        url={`${config.siteUrl}/${product.slug}`}
                      >
                        <i className="fab fa-facebook-square" />
                      </FacebookShareButton>
                    </div>
                    <div className="level-item">
                      <TwitterShareButton
                        url={`${config.siteUrl}/${product.slug}`}
                      >
                        <i className="fab fa-twitter-square" />
                      </TwitterShareButton>
                    </div>
                    <div className="level-item">
                      <PinterestShareButton
                        url={`${config.siteUrl}/${product.slug}`}
                        media={`http:${first (product.otherImages).sizes.src}`}
                      >
                        <i className="fab fa-pinterest-square" />
                      </PinterestShareButton>
                    </div>
                    <div className="level-item">
                      <EmailShareButton
                        url={`${config.siteUrl}/${product.slug}`}
                      >
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
  handleCheckout: PropTypes.func.isRequired,
};

export default ProductInfo;

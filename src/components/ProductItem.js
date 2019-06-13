import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import config from '../config';
import { formatCurrency } from '../utils/helpers';

const Container = styled(animated.div)`
  .card {
    border: none;
    box-shadow: none;
    .image.is-4by3 {
      padding-top: 0;
    }
    .card-content {
      padding-left: 0;
      padding-top: 0.8rem;
      position: relative;
      a {
        color: #363636;
      }
      .price-container {
        width: 50px;
        position: absolute;
        right: 0;
        top: 0.5rem;
      }
      .price {
        color: ${config.primaryColor};
      }
      .old-price {
        text-decoration: line-through;
      }
    }
  }
`;

const Image = styled(Img)`
  object-fit: cover;
  height: 460px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    height: 75%;
  }
`;

const ProductItem = ({ item, styles }) => (
  <Container className="column is-one-third" style={styles}>
    <div className="card">
      <div className="card-image">
        <Link to={`/product/${item.slug}`}>
          <figure className="image is-4by3">
            <Image
              sizes={item.featuredImage.sizes}
              alt={item.featuredImage.title}
              title={item.featuredImage.title}
              backgroundColor="#f1f1f1"
            />
          </figure>
        </Link>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5" style={{ maxWidth: '94%' }}>
              <Link to={`/product/${item.slug}`}>{item.title}</Link>
            </p>
            <p className="subtitle is-6 has-text-grey">{item.color}</p>
            <div className="price-container has-text-right">
              <p className="title is-5 has-text-weight-normal price">
                {formatCurrency(item.discountPrice)}
              </p>
              {item.discountPrice < item.originalPrice && (
                <p className="subtitle is-6 has-text-grey-light old-price">
                  {formatCurrency(item.originalPrice)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

ProductItem.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default ProductItem;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Link from 'gatsby-link';

import stylesUtils from '../utils/styles';

const Container = styled(animated.div)`
  .card {
    border: none;
    box-shadow: none;
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
        color: ${stylesUtils.primaryColor};
      }
      .old-price {
        text-decoration: line-through;
      }
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 415px;
  width: 100%;
`;

const ProductItem = ({ item, styles }) => (
  <Container className="column is-one-third" style={styles}>
    <div className="card">
      <div className="card-image">
        <Link to={`/product/${item.slug}`}>
          <figure className="image is-4by5">
            <Image
              src="https://images.ctfassets.net/o6uhtcakujse/4ZT5eQovFm0EM4C4CUi82c/7001ed809d4dab28f3495375468cfce3/Shara_22001.jpg?q=75&w=360"
              alt="Placeholder product"
            />
          </figure>
        </Link>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">
              <Link to={`/product/${item.slug}`}>{item.title}</Link>
            </p>
            <p className="subtitle is-6 has-text-grey">Red and Green</p>
            <div className="price-container has-text-right">
              <p className="title is-5 has-text-weight-normal price">£55</p>
              <p className="subtitle is-6 has-text-grey-light old-price">£62</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

ProductItem.propTypes = {
  styles: PropTypes.object,
};

export default ProductItem;

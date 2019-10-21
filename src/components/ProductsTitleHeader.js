import React from 'react';
import styled from 'styled-components';

import config from '../config';

const Container = styled.div`
  margin-top: ${props => (props.margin ? '4rem' : '2rem')};
  justify-content: left;
  display: flex;
  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  p {
    color: #777;
  }

  .product {
    // border-bottom: 2px solid ${config.themeColor};
    padding-bottom: 8px;
  }
`;

const ProductsTitleHeader = ({ text, label, margin }) => (
  <Container className="container" margin={margin}>
    <p className="is-size-3 has-text-weight-bold has-text-black-bis">
      {text}
      {` `}
      <span className="product">{label}</span>
    </p>
  </Container>
);

export default ProductsTitleHeader;

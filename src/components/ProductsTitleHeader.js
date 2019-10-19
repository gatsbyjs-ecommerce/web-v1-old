import React from 'react';
import styled from 'styled-components';

import config from '../config';

const Container = styled.div`
  margin-top: ${props => (props.margin ? '4rem' : '2rem')};
  justify-content: center;
  display: flex;
  p {
    color: #777;
  }

  .product {
    border-bottom: 2px solid ${config.themeColor};
    padding-bottom: 8px;
  }
`;

const ProductsTitleHeader = ({ text, label, margin }) => (
  <Container margin={margin}>
    <p className="is-size-4 has-text-weight-bold has-text-black-bis">
      {text}
      {` `}
      <span className="product">{label}</span>
    </p>
  </Container>
);

export default ProductsTitleHeader;

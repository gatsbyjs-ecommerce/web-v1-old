import React from 'react';
import styled from 'styled-components';

import config from '../config';

const Container = styled.div`
  margin-top: ${props => (props.margin ? '4rem' : '2rem')};
  padding: ${props => props.padding};
  justify-content: left;
  display: flex;
  p {
    color: #777;
  }

  .product {
    // border-bottom: 2px solid ${config.themeColor};
    padding-bottom: 8px;
  }
`;

const ProductsTitleHeader = ({ container, text, label, margin, padding }) => (
  <Container
    className={`${container ? 'container' : ''}`}
    margin={margin}
    padding={padding}>
    <p className="is-size-3 has-text-weight-bold has-text-black-bis">
      {text}
      {` `}
      <span className="product">{label}</span>
    </p>
  </Container>
);

export default ProductsTitleHeader;

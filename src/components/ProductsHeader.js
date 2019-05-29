import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  p {
    color: #777;
  }

  .product {
    border-bottom: 2px solid #384aeb;
    padding-bottom: 8px;
  }
`;

const ProductsHeader = () => (
  <Container>
    <p>Popular Item in the market</p>
    <p className="is-size-3 has-text-weight-bold has-text-black-bis">
      Trending <span className="product">Product</span>
    </p>
  </Container>
);

export default ProductsHeader;

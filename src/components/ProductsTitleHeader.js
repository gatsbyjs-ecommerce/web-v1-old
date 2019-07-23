import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  justify-content: center;
  display: flex;
  p {
    color: #777;
  }

  .product {
    border-bottom: 2px solid #384aeb;
    padding-bottom: 8px;
  }
`;

const ProductsTitleHeader = ({ text, label }) => (
  <Container>
    <p className="is-size-4 has-text-weight-bold has-text-black-bis">
      {text}
      {` `}
      <span className="product">{label}</span>
    </p>
  </Container>
);

export default ProductsTitleHeader;

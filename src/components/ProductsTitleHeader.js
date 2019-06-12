import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;
  p {
    color: #777;
  }

  .product {
    border-bottom: 2px solid #384aeb;
    padding-bottom: 8px;
  }
`;

const ProductsTitleHeader = ({ desc, text, label }) => (
  <Container>
    <p>{desc}</p>
    <p className="is-size-3 has-text-weight-bold has-text-black-bis">
      {text}
      <span className="product">{label}</span>
    </p>
  </Container>
);

export default ProductsTitleHeader;

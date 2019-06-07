import React from 'react';
import styled from 'styled-components';

import ProductsTitleHeader from './ProductsTitleHeader';
import ShoppingItems from '../components/ShoppingItems';

const Container = styled.div`
  .columns {
    @media only screen and (max-width: 768px) {
      justify-content: center;
      display: grid;
    }
  }
`;

const TrendingItems = () => (
  <Container className="section">
    <div className="container">
      <ProductsTitleHeader
        desc="Popular Item in the market"
        text="Trending"
        label="Products"
      />
      <div className="columns">
        <div className="column">
          <ShoppingItems />
        </div>
        <div className="column">
          <ShoppingItems />
        </div>
        <div className="column">
          <ShoppingItems />
        </div>
        <div className="column">
          <ShoppingItems />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <ShoppingItems />
        </div>
        <div className="column">
          <ShoppingItems />
        </div>
        <div className="column">
          <ShoppingItems />
        </div>
        <div className="column">
          <ShoppingItems />
        </div>
      </div>
    </div>
  </Container>
);

export default TrendingItems;

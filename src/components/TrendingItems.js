import React from 'react';

import ProductsTitleHeader from './ProductsTitleHeader';
import ShoppingItems from '../components/ShoppingItems';

const TrendingItems = () => (
  <section className="section">
    <div className="container">
      <ProductsTitleHeader desc="Popular Item in the market" text="Trending" label="Products" />
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
  </section>
);

export default TrendingItems;

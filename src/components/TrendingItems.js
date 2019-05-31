import React from 'react';

import ProductsTitleHeader from './ProductsTitleHeader';
import ProductsDescription from '../components/ShoppingItems';

const TrendingItems = () => (
  <section className="section">
    <div className="container">
      <ProductsTitleHeader />
      <div className="columns">
        <div className="column">
          <ProductsDescription />
        </div>
        <div className="column">
          <ProductsDescription />
        </div>
        <div className="column">
          <ProductsDescription />
        </div>
        <div className="column">
          <ProductsDescription />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <ProductsDescription />
        </div>
        <div className="column">
          <ProductsDescription />
        </div>
        <div className="column">
          <ProductsDescription />
        </div>
        <div className="column">
          <ProductsDescription />
        </div>
      </div>
    </div>
  </section>
);

export default TrendingItems;

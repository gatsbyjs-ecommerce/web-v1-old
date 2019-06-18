import React from 'react';

import TopProductsCard from './TopProductsCard';
import ProductsTitleHeader from './ProductsTitleHeader';

const ShopProducts = () => (
  <React.Fragment>
    <div>
      <ProductsTitleHeader desc="Popular Item in the market" text="Top" label="Products" />
    </div>
    <div className="columns is-flex is-hidden-mobile">
      <div className="column">
        <TopProductsCard />
      </div>
      <div className="column">
        <TopProductsCard />
      </div>
      <div className="column">
        <TopProductsCard />
      </div>
      <div className="column">
        <TopProductsCard />
      </div>
    </div>
    <div className="columns is-hidden-tablet">
      <div className="column">
        <TopProductsCard />
      </div>
      <div className="column">
        <TopProductsCard />
      </div>
      <div className="column">
        <TopProductsCard />
      </div>
      <div className="column">
        <TopProductsCard />
      </div>
    </div>
  </React.Fragment>
);

export default ShopProducts;
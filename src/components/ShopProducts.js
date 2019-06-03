import React from 'react';

import TopProductsCard from '../components/TopProductsCard';
import ProductsTitleHeader from '../components/ProductsTitleHeader';

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
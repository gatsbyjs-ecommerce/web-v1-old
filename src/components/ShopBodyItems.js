import React from 'react';
import styled from 'styled-components';

import AsideMenu from './AsideMenu';
import FilterBar from './FilterBar';
import ShoppingItems from './ShoppingItems';

const Items = styled.div`
  justify-content: center;
  display: grid;
`;

const ShopBodyItems = () => (
  <div className="columns">
    <div className="column is-3">
      <AsideMenu />
    </div>
    <div className="column is-hidden-mobile">
      <FilterBar />
      <div className="columns is-flex">
        <div className="column">
          <ShoppingItems />
          <ShoppingItems />
          <ShoppingItems />
        </div>
        <div className="column">
          <ShoppingItems />
          <ShoppingItems />
          <ShoppingItems />
        </div>
        <div className="column">
          <ShoppingItems />
          <ShoppingItems />
          <ShoppingItems />
        </div>
      </div>
    </div>
    <div className="columns is-hidden-tablet">
      <Items className="column">
        <ShoppingItems />
        <ShoppingItems />
        <ShoppingItems />
        <ShoppingItems />
        <ShoppingItems />
        <ShoppingItems />
        <ShoppingItems />
        <ShoppingItems />
        <ShoppingItems />
      </Items>
    </div>
  </div>
);

export default ShopBodyItems;

import React from 'react';
import styled from 'styled-components';

import AsideMenu from './AsideMenu';
import SearchBar from './SearchBar';
import ShoppingItems from './ShoppingItems';

const Items = styled.div`
  justify-content: center;
  display: grid;
`;

const ShopItems = () => (
  <div className="columns">
    <div className="column is-3">
      <AsideMenu />
    </div>
    <div className="column">
      <SearchBar />
      <div className="columns">
        <div className="column is-flex">
          <ShoppingItems />
          <ShoppingItems />
          <ShoppingItems />
        </div>
      </div>
    </div>
  </div>
);

export default ShopItems;

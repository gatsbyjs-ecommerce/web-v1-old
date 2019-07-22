import React from 'react';

import AsideMenu from './AsideMenu';
import SearchBar from './SearchBar';
import Container from './Container';

const ShopItems = () => (
  <div className="columns">
    <div className="column is-3">
      <AsideMenu />
    </div>
    <div className="column">
      <SearchBar />
      <Container>
        <h1 className="title">Our Products</h1>
      </Container>
      <Container>
        <h1 className="title">TV Accessories</h1>
      </Container>
    </div>
  </div>
);

export default ShopItems;

import React from 'react';
import styled from 'styled-components';

import AsideMenu from './AsideMenu';
import SearchBar from './SearchBar';
import Container from './Container';

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
      <Container>
        <h1>Our Products</h1>
      </Container>
      <Container>
        <h1>TV Accessories</h1>
      </Container>
    </div>
  </div>
);

export default ShopItems;

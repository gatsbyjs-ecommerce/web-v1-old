import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import SearchBar from './SearchBar';

const Container = styled.div`
  height: 4rem;
  background-color: #f1f6f7;
  padding: 1.5%;
  width: 98.5%;

  .dropdown {
    margin-right: 3%;
  }

  select {
    border: transparent;
  }

  button {
    border: transparent;
  }
`;

const FilterBar = () => (
  <Container className="is-flex">
    <SearchBar />
  </Container>
);

export default FilterBar;

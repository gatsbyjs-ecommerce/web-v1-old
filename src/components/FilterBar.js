import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import SearchBar from './SearchBar';

const Container = styled.div`
  height: 4rem;
  background-color: #f1f6f7;
  padding: 1.5%;
  width: 98.5%;
  justify-content: space-between;

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

const fiterQuery = graphql`
  query {
    allContentfulSearchBarOptions {
      edges {
        node {
          id
          option
        }
      }
    }
  }
`;

const FilterBar = () => (
  <Container className="is-flex">
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <div className="field">
          <div className="control">
            <div className="select">
              <select className="is-radiusless">
                <option>Select Options</option>
                <StaticQuery
                  query={fiterQuery}
                  render={data => {
                    // console.log(data, 'filterdata');
                    const lists = data.allContentfulSearchBarOptions.edges;
                    return lists.map(item => (
                      <option key={item.node.id} value={item.node.value}>
                        {item.node.option}
                      </option>
                    ));
                  }}
                />
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SearchBar />
  </Container>
);

export default FilterBar;

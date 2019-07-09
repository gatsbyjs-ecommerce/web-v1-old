import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

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

  button,
  input {
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
                      <option key={item.id}>{item.option}</option>
                    ));
                  }}
                />
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="field search-bar">
      <p className="control has-icons-right">
        <input
          className="input is-radiusless"
          type="text"
          placeholder="Search"
        />
        <span className="icon is-small is-right">
          <i className="fas fa-search" />
        </span>
      </p>
    </div>
  </Container>
);

export default FilterBar;

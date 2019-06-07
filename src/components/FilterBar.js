import React from 'react';
import styled from 'styled-components';

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

  div p input {
    padding-left: 18%;
  }

  button,
  input {
    border: transparent;
  }

  .search-bar {
    margin-left: 22%;
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
                <option>Select Items</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <div className="field">
          <div className="control">
            <div className="select">
              <select className="is-radiusless">
                <option>Select Items</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
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

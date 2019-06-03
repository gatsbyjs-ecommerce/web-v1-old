import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 4rem;
  background-color: #f1f6f7;
  padding: 1.2%;

  .dropdown {
    margin-right: 3%;
  }

  .field {
    padding-left: 30%;
  }

  button, input {
    border: transparent;
  }
`;

const FilterBar = () => (
  <React.Fragment>
    <Container className="is-flex">
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button is-radiusless"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>Default Sorting</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <a>Default Sorting</a>
            </div>
            <div className="dropdown-item">
              <a>Default Sorting</a>
            </div>
            <div className="dropdown-item">
              <a>Default Sorting</a>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button is-radiusless"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>Show 12</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <a>Show 12</a>
            </div>
            <div className="dropdown-item">
              <a>Show 12</a>
            </div>
            <div className="dropdown-item">
              <a>Show 12</a>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
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
  </React.Fragment>
);

export default FilterBar;

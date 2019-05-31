import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-table;
  width: 60%;
  height: 4rem;
  background-color: #f1f6f7;
`;

const FilterBar = () => (
  <React.Fragment>
    <Container className="is-flex">
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>Hover me</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p>
                You can insert <strong>any type of content</strong> within the
                dropdown menu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>Hover me</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p>
                You can insert <strong>any type of content</strong> within the
                dropdown menu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Find a repository"
          />
        </p>
      </div>
    </Container>
  </React.Fragment>
);

export default FilterBar;

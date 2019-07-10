import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 4rem;
  background-color: #f1f6f7;
  padding: 1.4%;

  input {
    border: transparent;
  }
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: [],
    };
  }

  // TODO: Fix this with filter. Take reference from lodash

  handleChange = () => {
    this.setState();
  };

  render() {
    return (
      <Container className="field search-bar">
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
      </Container>
    );
  }
}

export default SearchBar;

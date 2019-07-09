import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  input {
    border: transparent;
  }
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="field search-bar">
        <p className="control has-icons-right">
          <input
            className="input is-radiusless"
            type="text"
            placeholder="Search"
            value={this.state.searchFilter}
            onChange={this.handleChange}
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

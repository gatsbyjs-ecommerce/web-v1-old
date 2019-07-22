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
      filter: '',
      data: [
        // {
        //   brand: 'Samsung',
        //   lname: 'Washington',
        //   email: 'jaynewashington@exposa.com',
        //   gender: 'female',
        // },
        // {
        //   brand: 'LG',
        //   lname: 'Dalton',
        //   email: 'petersondalton@exposa.com',
        //   gender: 'male',
        // },
      ],
    };
  }

  // TODO: Fix this with filter. Take reference from lodash

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter),
      );
    });

    return (
      <Container className="field search-bar">
        <p className="control has-icons-right">
          <input
            className="input is-radiusless"
            type="text"
            placeholder="Search"
            value={filter}
            onChange={this.handleChange}
          />
          <span className="icon is-small is-right">
            <i className="fas fa-search" />
          </span>
          {filteredData.map(item => (
            <div key={item.email}>
              <div>
                {item.fname} {item.lname} - {item.gender} - {item.email}
              </div>
            </div>
          ))}
        </p>
      </Container>
    );
  }
}

export default SearchBar;

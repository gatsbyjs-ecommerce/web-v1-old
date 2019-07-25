import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Trail } from 'react-spring';

import ProductItem from './ProductItem';

const Container = styled.div`
  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
  }
  .container {
    width: 100%;
  }
  .columns {
    @media only screen and (max-width: 768px) {
      justify-content: center;
    }
  }
`;

class TrendingItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOpen: true });
    }, 200);
  }

  render() {
    const { products, category, brand, searchQuery } = this.props;
    const { isOpen } = this.state;
    const keys = products.map(item => item.node.id);

    return (
      <Container className="section">
        <div className="container">
          <div className="columns is-multiline">
            <Trail
              native
              from={{ opacity: 0 }}
              to={{ opacity: isOpen ? 1 : 0.25 }}
              keys={keys}>
              {products.map(({ node }) => () => {
                // filter here
                if (category === 'all' || !category) {
                  //
                } else if (category && !node.category) {
                  return null;
                } else if (category !== node.category.slug) {
                  return null;
                }

                if (brand === 'all' || !brand) {
                  //
                } else if (brand && !node.brand) {
                  return null;
                } else if (brand !== node.brand.slug) {
                  return null;
                }

                const nodeTitle = node.title.toLowerCase();
                if (!searchQuery) {
                  //
                } else if (searchQuery.length < 2) {
                  //
                } else if (nodeTitle.search(searchQuery.toLowerCase()) === -1) {
                  return null;
                }

                return <ProductItem key={node.id} item={node} />;
              })}
            </Trail>
          </div>
        </div>
      </Container>
    );
  }
}

TrendingItems.defaultProps = {
  products: [],
};

TrendingItems.propTypes = {
  products: PropTypes.array,
};

export default TrendingItems;

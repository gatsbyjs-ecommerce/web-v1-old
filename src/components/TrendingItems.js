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
    const { products } = this.props;
    const { isOpen } = this.state;
    const keys = products.map(item => item.node.id);
    // console.log('products', products);

    return (
      <Container className="section">
        <div className="container">
          <div className="columns is-multiline">
            <Trail
              native
              from={{ opacity: 0 }}
              to={{ opacity: isOpen ? 1 : 0.25 }}
              keys={keys}>
              {products.map(({ node }) => () => (
                <ProductItem key={node.id} item={node} />
              ))}
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

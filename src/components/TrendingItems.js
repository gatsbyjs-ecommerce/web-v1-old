import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Trail } from 'react-spring';
import { filter } from 'underscore';

import ProductsTitleHeader from './ProductsTitleHeader';
import ProductItem from './ProductItem';

const Container = styled.div`
  @media only screen and (max-width: 768px) {
    margin-top: -8rem;
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

    this.state = { isOpen: false, activeCategory: null };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOpen: true });
    }, 200);
  }

  toggleCategory = (category) => (
    this.setState({ activeCategory: category })
  )

  render() {
    const { products } = this.props;
    const { isOpen, activeCategory } = this.state;
    const keys = products.map(item => item.node.id);
    // console.log('products', products);

    if (activeCategory === null) {
      const filterProducts = products
    } else {
      const filterProducts = filter(
        products,
        item => item.category === activeCategory,
      );
    }

    return (
      <Container className="section">
        <div className="container">
          <ProductsTitleHeader
            desc="Popular Item in the market"
            text="Trending"
            label="Products"
          />
          <div className="columns is-multiline">
            <Trail
              native
              from={{ opacity: 0 }}
              to={{ opacity: isOpen ? 1 : 0.25 }}
              keys={keys}
            >
              {products.map(({ node }) => styles => (
                <ProductItem key={node.id} item={node} styles={styles} />
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

// export const trendingItemsQuery = graphql`
// query Shopping {
//   allContentfulShoppingItems {
//     edges {
//       node {
//         id
//         productImage {
//           id
//         }
//         productCategory
//         productName
//         productPrice
//       }
//     }
//   }
// }
// `;

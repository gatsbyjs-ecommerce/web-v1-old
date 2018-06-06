import React from 'react';

import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import HomeAbout from '../components/HomeAbout';

export default class IndexPage extends React.Component {
  render() {
    const {
      data: { allContentfulProduct: products },
    } = this.props;

    return (
      <React.Fragment>
        <HomeBanner />
        <ProductsList products={products.edges} />
        <HomeAbout />
      </React.Fragment>
    );
  }
}

export const indexQuery = graphql`
  query Products {
    allContentfulProduct(filter: { status: { eq: "active" } }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

import React from 'react';
import Helmet from 'react-helmet';

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
        <Helmet title="Punjabi designer suits | Sejal Suits" />
        <HomeBanner />
        <ProductsList products={products.edges} />
        <HomeAbout />
      </React.Fragment>
    );
  }
}

export const indexQuery = graphql`
  query Products {
    allContentfulProduct(
      filter: { status: { eq: "active" } }
      sort: { fields: [listingOrder], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
          color
          originalPrice
          discountPrice
          featuredImage {
            title
            sizes(maxWidth: 550) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;

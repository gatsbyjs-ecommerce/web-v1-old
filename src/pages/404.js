import React from 'react';
import Helmet from 'react-helmet';

import config from '../config';
import Heading from '../components/Heading';
import ProductsList from '../components/ProductsList';

const NotFoundPage = ({ data }) => {
  const { allContentfulProduct: products } = data;

  return (
    <div>
      <Helmet title={`Not found - ${config.siteName}`} />
      <Heading>NOT FOUND</Heading>
      <p className="has-text-centered is-size-5">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <br />
      <ProductsList title="We think you'll" products={products.edges} />
    </div>
  );
};

export default NotFoundPage;

export const notFoundQuery = graphql`
  query notFoundQuery {
    allContentfulProduct(
      filter: { status: { eq: "active" } }
      limit: 6
      sort: { fields: [createdAt], order: DESC }
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

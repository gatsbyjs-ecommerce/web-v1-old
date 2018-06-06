import React from 'react';
import graphql from 'graphql';

export default ({ data }) => {
  const { contentfulProduct: product } = data;
  console.log('product', product);

  return <div>product page: {product.title}</div>;
};

export const productQuery = graphql`
  query ProductByPath($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      title
      slug
      status
      originalPrice
      discountPrice
      shippingCost
      color
      rating
      productCode
      featuredImage {
        id
      }
      otherImages {
        id
      }
      shortDetails {
        id
      }
      longDetails {
        id
      }
    }
  }
`;

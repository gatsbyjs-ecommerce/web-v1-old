import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import TrendingItems from './TrendingItems';

const Container = styled.div`
  padding: 0rem 1rem;
`;

export const heroQuery = graphql`
  query FeaturedProducts {
    allContentfulProduct(
      limit: 3
      filter: { status: { eq: "active" }, isFeatured: { eq: true } }
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
          nonUserPrice
          userPrice
          dealerPrice
          featuredImage {
            title
            sizes(maxWidth: 550) {
              ...GatsbyContentfulSizes
            }
          }
          category {
            slug
          }
          brand {
            slug
          }
        }
      }
    }
  }
`;

export default class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StaticQuery
          query={heroQuery}
          render={data => {
            const { allContentfulProduct: products } = data;
            return (
              <Container>
                <TrendingItems products={products.edges} />
              </Container>
            );
          }}
        />
      </React.Fragment>
    );
  }
}

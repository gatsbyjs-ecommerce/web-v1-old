import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ProductsList from '../components/ProductsList';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
`;

// export const notFoundQuery = graphql`
//   query notFoundQuery {
//     allContentfulProduct(
//       filter: { status: { eq: "active" } }
//       limit: 6
//       sort: { fields: [createdAt], order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           title
//           slug
//           color
//           originalPrice
//           discountPrice
//           featuredImage {
//             title
//             sizes(maxWidth: 550) {
//               ...GatsbyContentfulSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const NotFoundPage = ({ data }) => {
  // const { allContentfulProduct: products } = data;
  const products = [];

  return (
    <Layout>
      <Seo title="NOT FOUND" />
      <section className="section">
        <Container className="container">
          <h1 className="title">NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <br />
          <ProductsList title="We think you'll" products={products.edges} />
        </Container>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

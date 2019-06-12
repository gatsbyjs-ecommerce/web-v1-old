import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { graphql } from 'gatsby'

import config from '../config';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
// import ProductsList from '../components/ProductsList';

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

export default class NotFoundPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/404');
  }

  render() {
<<<<<<< HEAD
    const { allContentfulProduct: products } = this.props.data;

    return (
      <Layout>
=======
    // const { allContentfulProduct: products } = this.props.data;

    return (
      <div>
>>>>>>> 023344efad3daf794f54b896ace387485cb982ed
        <Helmet title={`Not found - ${config.siteName}`} />
        <Heading>NOT FOUND</Heading>
        <p className="has-text-centered is-size-5">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
        <br />
<<<<<<< HEAD
        <ProductsList title="We think you'll" products={products.edges} />
      </Layout>
    );
  }
}
=======
        {/* <ProductsList title="We think you'll" products={products.edges} /> */}
      </div>
    );
  }
}

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
>>>>>>> 023344efad3daf794f54b896ace387485cb982ed

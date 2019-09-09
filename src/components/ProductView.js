import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from './Seo';
import Layout from './Layout';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductsList from './ProductsList';

const Container = styled.div`
  &&& {
    margin-top: 3rem;
  }
`;

const ViewAllBtn = styled(Link)`
  padding-right: 2rem;
  padding-left: 2rem;
`;

export const query = graphql`
  query ProductViewQuery($slug: String!) {
    sanitySiteSettings {
      productDeliveryInfo
      productShippingReturns
    }
    sanityProduct(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      _rawBody
      variant {
        color
        discountPrice
        price
        sku
        featuredImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        images {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    allSanityProduct(
      filter: { status: { eq: "active" }, slug: { current: { ne: $slug } } }
      limit: 9
      sort: { fields: [_createdAt], order: DESC }
    ) {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          variant {
            color
            discountPrice
            price
            sku
            featuredImage {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ProductView = ({ data }) => {
  const product = data.sanityProduct;
  const products = data.allSanityProduct.edges;
  const home = data.sanitySiteSettings;
  // console.log('products', products);

  // const metaImage = product.featuredImage
  //   ? product.featuredImage.sizes.src
  //   : `${config.url}${config.logo}`;

  return (
    <Layout>
      <Seo
        title={product.title}
        url={`${config.siteUrl}/product/${product.slug}`}
        // image={metaImage}
        isProduct
      />
      <div className="container">
        <Container className="columns">
          <div className="column is-two-fifths">
            <ProductGallery product={product} />
          </div>
          <div className="column section">
            <ProductInfo home={home} product={product} />
          </div>
        </Container>
        <ProductsList title="We think you'll" products={products} />
        <div className="has-text-centered	">
          <ViewAllBtn to="/" className="button is-outlined is-medium">
            View all
          </ViewAllBtn>
        </div>
      </div>
    </Layout>
  );
};

export default ProductView;

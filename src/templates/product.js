import React from 'react';
import graphql from 'graphql';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Link from 'gatsby-link';

import Seo from '../components/Seo';
import config from '../config/index';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductsList from '../components/ProductsList';

const Container = styled.div`
  &&& {
    margin-top: 3rem;
  }
`;

const ViewAllBtn = styled(Link)`
  padding-right: 2rem;
  padding-left: 2rem;
`;

export default class Product extends React.Component {
  componentDidMount() {
    const { contentfulProduct: product } = this.props.data;

    ReactGA.pageview(`/product/${product.slug}`);
  }

  render() {
    const {
      data: {
        contentfulProduct: product,
        allContentfulProduct: products,
        contentfulHome: home,
      },
    } = this.props;
    // console.log('product', product);

    const metaImage = product.featuredImage
      ? product.featuredImage.sizes.src
      : `${config.url}${config.logo}`;

    return (
      <React.Fragment>
        <Seo
          title={product.title}
          description={product.shortDetails.shortDetails}
          url={`${config.siteUrl}/product/${product.slug}`}
          image={metaImage}
          isProduct
        />
        <div>
          <Container className="columns">
            <div className="column is-two-fifths">
              <ProductGallery product={product} />
            </div>
            <div className="column section">
              <ProductInfo home={home} product={product} />
            </div>
          </Container>
        </div>
        {product.edges && <ProductsList title="We think you'll" products={products.edges} />}
        <div className="has-text-centered	">
          <ViewAllBtn to="/" className="button is-outlined is-medium">
            View all
          </ViewAllBtn>
        </div>
      </React.Fragment>
    );
  }
}

export const productQuery = graphql`
  query ProductByPath($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      title
      slug
      originalPrice
      discountPrice
      shippingCost
      color
      productCode
      featuredImage {
        title
        sizes(maxWidth: 550) {
          ...GatsbyContentfulSizes
        }
      }
      otherImages {
        id
        title
        sizes(maxWidth: 1200) {
          ...GatsbyContentfulSizes
        }
      }
      shortDetails {
        shortDetails
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulProduct(
      filter: { status: { eq: "active" }, slug: { ne: $slug } }
      limit: 9
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
    contentfulHome {
      productDeliveryInfo {
        childMarkdownRemark {
          html
        }
      }
      productShippingReturns {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

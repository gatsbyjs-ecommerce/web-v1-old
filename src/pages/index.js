import React from 'react';
import Helmet from 'react-helmet';

import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import HomeAbout from '../components/HomeAbout';
import SEO from '../components/SEO';

export default class IndexPage extends React.Component {
  render () {
    const {
      data: {allContentfulProduct: products, contentfulHome: home},
    } = this.props;

    return (
      <React.Fragment>
        <SEO isProduct={false} productData="" />
        {/* <Helmet title="Punjabi designer suits | Sejal Suits" /> */}
        <HomeBanner data={home} />
        <ProductsList products={products.edges} />
        <HomeAbout data={home} />
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
    contentfulHome {
      homeSliderTitle
      homeSliderSubTitle
      homeSliderImage {
        title
        sizes(maxWidth: 550) {
          ...GatsbyContentfulSizes
        }
      }
      homeIntro {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

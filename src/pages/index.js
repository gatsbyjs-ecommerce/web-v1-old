import React from 'react';

import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import HomeAbout from '../components/HomeAbout';
import SEO from '../components/SEO';
import config from '../config/index';

export default class IndexPage extends React.Component {
  render () {
    const {
      data: {allContentfulProduct: products, contentfulHome: home},
    } = this.props;

    const metaData = {
      title: 'New In | Sejal Suits',
      description: 'Latest Punjabi Traditional Suits',
    };

    return (
      <React.Fragment>
        <SEO data={metaData} isPage url={config.url} />
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

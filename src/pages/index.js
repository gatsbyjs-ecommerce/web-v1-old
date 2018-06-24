import React from 'react';
import ReactGA from 'react-ga';

import config from '../config/index';
import Seo from '../components/Seo';
import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import HomeAbout from '../components/HomeAbout';

export default class IndexPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/');
  }

  render() {
    const {
      data: { allContentfulProduct: products, contentfulHome: home },
    } = this.props;

    return (
      <React.Fragment>
        <Seo
          title="Latest punjabi suits collection"
          description="Latest Punjabi Traditional Suits"
          url={config.siteUrl}
        />
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

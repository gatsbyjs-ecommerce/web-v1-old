import React from 'react';
import ReactGA from 'react-ga';
// import { first } from 'underscore';

import config from '../config/index';
import Seo from '../components/Seo';
// import HomeBanner from '../components/HomeBanner';
// import ProductsList from '../components/ProductsList';
// import HomeAbout from '../components/HomeAbout';
import Hero from '../components/Hero';
import CarousalSlider from '../components/CarousalSlider';
import TrendingProducts from '../components/TrendingProduct';

// import ScrollButton from '../components/ScrollButton';

export default class IndexPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/');
  }

  render() {
    // const {
    //   data: { allContentfulProduct: products, contentfulHome: home },
    // } = this.props;
    // const currencies = first(currency.edges).node;
    // console.log('currencies', currencies);

    return (
      <React.Fragment>
        <Seo
          title="Latest punjabi suits collection"
          description="Latest Punjabi Traditional Suits"
          url={config.siteUrl}
        />
        <Hero />
        <CarousalSlider />
        <TrendingProducts />
        {/* <HomeBanner data={home} />
        <ProductsList products={products.edges} />
        <HomeAbout data={home} /> */}
      </React.Fragment>
    );
  }
}

// export const indexQuery = graphql`
//   query Products {
//     allContentfulProduct(
//       filter: { status: { eq: "active" } }
//       sort: { fields: [listingOrder], order: ASC }
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
//     contentfulHome {
//       homeSliderTitle
//       homeSliderSubTitle
//       homeSliderImage {
//         title
//         sizes(maxWidth: 550) {
//           ...GatsbyContentfulSizes
//         }
//       }
//       homeIntro {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//     allDataJson {
//       edges {
//         node {
//           GBP_CAD {
//             val
//           }
//           GBP_INR {
//             val
//           }
//         }
//       }
//     }
//   }
// `;

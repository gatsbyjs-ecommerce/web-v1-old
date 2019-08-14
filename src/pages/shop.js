import React from 'react';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import config from '../config/index';
import Seo from '../components/Seo';
import AsideMenu from '../components/AsideMenu';
import SearchBar from '../components/SearchBar';
import ProductsTitleHeader from '../components/ProductsTitleHeader';
import TrendingItems from '../components/TrendingItems';

const Section = styled.section`
  padding: 0rem 1.5rem !important;
`;

export const shopQuery = graphql`
  query {
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
          category {
            slug
          }
          brand {
            slug
          }
        }
      }
    }
    allContentfulBrand {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    allContentfulCategory {
      edges {
        node {
          id
          title
          slug
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
    allDataJson {
      edges {
        node {
          CAD_USD {
            val
          }
          CAD_INR {
            val
          }
        }
      }
    }
  }
`;

export default class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = { category: 'all', brand: 'all', searchQuery: '' };
  }

  componentDidMount() {
    ReactGA.pageview('/shop');
  }

  onBrandChange = brand => {
    this.setState({ brand });
  };

  onCategoryChange = category => {
    this.setState({ category });
  };

  render() {
    const { category, brand, searchQuery } = this.state;

    return (
      <Layout>
        <Section className="section">
          <div className="container">
            <Seo
              title="Shop"
              description="Search our wide range of products"
              url={`${config.siteUrl}/shop`}
              keywords="all products, tv accessories, led tv"
            />

            <StaticQuery
              query={shopQuery}
              render={data => {
                // console.log(data, 'data');
                const {
                  allContentfulProduct: products,
                  allContentfulBrand: brands,
                  allContentfulCategory: categories,
                } = data;
                return (
                  <div className="columns">
                    <div className="column is-3">
                      <AsideMenu
                        brands={brands.edges}
                        categories={categories.edges}
                        brand={brand}
                        category={category}
                        onBrandChange={this.onBrandChange}
                        onCategoryChange={this.onCategoryChange}
                      />
                    </div>
                    <div className="column is-9">
                      <SearchBar
                        onChange={val => this.setState({ searchQuery: val })}
                      />
                      <ProductsTitleHeader text="Our" label="Products" />
                      <TrendingItems
                        products={products.edges}
                        category={category}
                        brand={brand}
                        searchQuery={searchQuery}
                      />
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </Section>
      </Layout>
    );
  }
}

const fs = require(`fs`);
const path = require('path');
const fetch = require('isomorphic-unfetch');

exports.onPreBootstrap = () => {
  // fetch currency rates
  const currencyApiKey = '57a4c3e89637843f3d22';
  fetch(
    `http://free.currconv.com/api/v7/convert?q=GBP_CAD,GBP_INR&compact=y&apiKey=${currencyApiKey}`,
  )
    .then(r => r.json())
    .then(data => {
      fs.writeFileSync(`./data/currency.json`, JSON.stringify(data, ``, 2));
    });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allContentfulPages {
        edges {
          node {
            id
            title
            slug
            content {
              childMarkdownRemark {
                html
              }
            }
            image {
              id
              title
              file {
                url
                fileName
                contentType
              }
              sizes {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
              resolutions {
                base64
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
              resize {
                base64
                src
                width
                height
                aspectRatio
              }
            }
          }
        }
      }
      allContentfulProduct {
        edges {
          node {
            id
            title
            slug
            status
            originalPrice
            discountPrice
            shippingCost
            color
            rating
            productCode
            featuredImage {
              title
              file {
                url
                fileName
                contentType
              }
              sizes {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
              resolutions {
                base64
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
              resize {
                base64
                src
                width
                height
                aspectRatio
              }
            }
            otherImages {
              id
              title
              file {
                url
                fileName
                contentType
              }
              sizes {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
              resolutions {
                base64
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
              resize {
                base64
                src
                width
                height
                aspectRatio
              }
            }
            shortDetails {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `).then(async result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString())); // eslint-disable-line
      return Promise.reject(result.errors);
    }

    // console.log('result', result);
    result.data.allContentfulPages.edges.forEach(({ node }) => {
      // console.log('node', node);
      const pagePath = `page/${node.slug}`;
      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/page.js`),
        // additional data can be passed via context
        context: {
          slug: node.slug,
        },
      });
    });

    result.data.allContentfulProduct.edges.forEach(({ node }) => {
      // console.log('node', node);
      const pagePath = `product/${node.slug}`;
      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/product.js`),
        // additional data can be passed via context
        context: {
          slug: node.slug,
        },
      });
    });

    return null;
  });
};

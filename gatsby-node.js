const path = require('path');

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
              id
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
              id
            }
            otherImages {
              id
            }
            shortDetails {
              id
            }
            longDetails {
              id
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

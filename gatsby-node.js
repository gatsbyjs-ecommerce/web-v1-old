const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityProduct {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      allSanityPage {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    return reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  const products = result.data.allSanityProduct.edges || [];
  const pages = result.data.allSanityPage.edges || [];

  products.forEach(({ node }) => {
    createPage({
      path: `product/${node.slug.current}`,
      component: path.resolve(`src/components/ProductView.js`),
      // additional data can be passed via context
      context: {
        slug: node.slug.current,
      },
    });
  });

  pages.forEach(({ node }) => {
    createPage({
      path: `page/${node.slug.current}`,
      component: path.resolve(`src/components/PageView.js`),
      // additional data can be passed via context
      context: {
        slug: node.slug.current,
      },
    });
  });
};

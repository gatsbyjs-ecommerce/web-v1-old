const path = require('path');

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructure the createPage function from the actions object
//   const { createPage } = actions;
//   const result = await graphql(`
//     query {
//       allContentfulProduct {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//     }
//   `);
//   if (result.errors) {
//     return reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
//   }
//   if (!result.data) {
//     return reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query data');
//   }

//   const products = result.data.allContentfulProduct.edges;

//   products.forEach(({ node }) => {
//     createPage({
//       path: `product/${node.slug}`,
//       component: path.resolve(`src/components/ProductView.js`),
//       // additional data can be passed via context
//       context: {
//         slug: node.slug,
//       },
//     });
//   });
// };

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//     },
//   });
// };

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
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
  `);
  if (result.errors) {
    return reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  if (!result.data) {
    return reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query data');
  }
  // console.log('result', result.data);
  // Create blog post pages.
  const posts = result.data.allMdx.edges;
  const products = result.data.allContentfulProduct.edges;
  // We'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/NewsLayout.js`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });

  products.forEach(({ node }) => {
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
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

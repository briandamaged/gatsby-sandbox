/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');


exports.createPages = async function({boundActionCreators, graphql}) {
  const {createPage} = boundActionCreators;

  const blogPostTemplate = path.resolve(__dirname, 'src', 'templates', 'blog.js');

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }

  `);

  if(result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.edges.forEach(function({node}) {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {},
    });
  });
};

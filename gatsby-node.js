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
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
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
    const p = node.frontmatter.path || path.relative(__dirname, node.fileAbsolutePath);

    createPage({
      path: p,
      component: blogPostTemplate,
      context: {
        id: node.id
      },
    });
  });
};

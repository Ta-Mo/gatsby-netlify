// Called when a new node is created. Plugins wishing to extend or transform
// nodes created by other plugins should implement this API.
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

//gatsby-node.js
exports.createPages = ({ graphql, actions }) => {
  // destruct from actions our createPage
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    // interate through graphql query and create a page for each node
    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve(`src/layouts/BlogpostLayout.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}

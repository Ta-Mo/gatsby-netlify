/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// gatsby-config.js
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "This is the description of our website",
    keywords: "gatsby, gatsbyjs project, gatsby bootstrap",
    image: "/static/gatsby image.jpeg",
    url: "https://www.gatsbyjs.com/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS Bootstrap Tutorial`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}

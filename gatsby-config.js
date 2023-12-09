module.exports = {
  siteMetadata: {
    title: "Adam Gerbens' Personal Site",
    description: 'Contact me at adam.gerbens@gmail.com',
    author: `@agerbens`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-123987039-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Gerbens' Personal Site`,
        short_name: `adamgerbens.com`,
        start_url: `/`,
        background_color: `#f0f3f5`,
        theme_color: `#f0f3f5`,
        display: `minimal-ui`,
        icon: `src/images/me.png`, // This path is relative to the root of the site.
      },
    },
  ],
};

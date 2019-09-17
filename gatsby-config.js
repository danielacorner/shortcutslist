module.exports = {
  siteMetadata: {
    title: `Shortcuts List`,
    description: `Shortcuts for desktop and mobile. Shortcuts help you do more with less. Enjoy life -- don't push harder; lower the resistance.`,
    author: `@danielacorner`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shortcuts-list`,
        short_name: `shortcutslist`,
        start_url: `/`,
        background_color: `hsl(255,50%,45%)`,
        theme_color: `hsl(255,50%,45%)`,
        display: `minimal-ui`,
        icon: `src/images/shortcutslist-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

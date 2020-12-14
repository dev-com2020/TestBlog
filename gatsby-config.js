module.exports = {
  siteMetadata: {
    title: 'TechBlog',
    description: 'DESCRIPTION FOR CHANGE',
    author: 'Szymon,Agata,Mateusz',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Roboto Condensed',
            variants: [`300`, `400`, `700`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: "bba2a004263ce83f662dbb2c462345",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/src/assets/svg`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `techblog-18`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

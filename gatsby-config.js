require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Blog o najnowszych informacjach ze swiata IT',
    description: 'Największy blog informatyczny o nowościach ze świata IT miedzy innymi: smartfony, sprzęt komputerowy, smartwatche, gry, smart dom i wiele innych',
    keywords: 'blog, informatyka, smartfony, komputerowy, smart, dom, gry',
    author: 'Szymon,Agata,Mateusz',
    url: 'https://elegant-kare-45c49d.netlify.app/',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
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
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
  ],
};

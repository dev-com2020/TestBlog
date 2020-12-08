module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
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
  ],
};

module.exports = {
    siteMetadata: {
        siteUrl: 'https://wave.free-now.com'
    },
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: './src/gatsby-theme-docz/favicon.png'
            }
        }
    ]
};

module.exports = {
    siteMetadata: {
        siteUrl: 'https://wave.free-now.com'
    },
    plugins: [
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                policy: [
                    {
                        userAgent: '*',
                        disallow: '/'
                    }
                ]
            }
        },
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

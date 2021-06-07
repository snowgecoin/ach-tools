module.exports = {
    siteMetadata: {
        title: "AchTools",
        description: 'Front end site for Snowge, the next moon rocket.', // TODO
        author: 'SnowgeMami'
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-theme-ui",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ach-Tools`,
                short_name: `achtools`,
                start_url: `/`,
                display: `standalone`,
                icon: "src/images/favicon-smol.png" // This path is relative to the root of the site.
            },
        },
    ],
};

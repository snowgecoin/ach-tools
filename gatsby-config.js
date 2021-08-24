module.exports = {
    siteMetadata: {
        title: "AchTools",
        description: 'Front end site for ACHtools, the most advanced multichain DeFi price bots.', 
        author: 'SnowgeMami & Eggs :)'
    },
    flags: {
        DEV_SSR: false
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
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

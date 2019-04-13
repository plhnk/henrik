module.exports = {
  siteMetadata: {
    title: "Arrived 12.04.19",
    message: "I'm live, but my site is currently in development.",
    pattern: "Henrik",
    color: "#fff",
    titleFont: "Work Sans",
    messageFont: "Roboto",
    social: ["https://github.com/plhnk/henrik","mailto:henrik@hanaoka.co"],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-under-construction",
        short_name: "Under Construction",
        start_url: "/",
        background_color: "#4c4c4c",
        theme_color: "#4c4c4c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline"
  ],
}

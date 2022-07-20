module.exports = {
    siteMetadata: {
      description: "Manish Balamurugan's Portfolio",
      locale: "en",
      title: "Manish Balamurugan",
      formspreeEndpoint: "https://formspree.io/f/mpzbvrrn",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: true,
          theme: "dark-pink",
        },
      },
    ],
  }
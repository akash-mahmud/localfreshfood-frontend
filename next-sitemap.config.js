/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN || "https://www.localfreshfoods.co.uk/",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap-index.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_DOMAIN}/server-sitemap-index.xml` ||
        `https://www.localfreshfoods.co.uk/server-sitemap-index.xml`, // <==== Add here
    ],
  },
};

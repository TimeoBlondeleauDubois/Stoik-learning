/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://start-next.netlify.app/',
  generateRobotsTxt: true, // (optional)
  exclude: ['/slice-simulator', '/404', ,],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: 'black-listed-bot',
        disallow: [],
      },
    ],
  },
}

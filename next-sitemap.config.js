/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://codexharoon.com',
  generateRobotsTxt: false, // We use a static robots.txt in /public
  exclude: ['/admin/*', '/manifest.webmanifest'],
}

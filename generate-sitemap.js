// generate-sitemap.js
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.johndoe.fr'; // remplace par ton vrai domaine

// Liste manuelle de tes routes
const routes = [
  '/',
  '/services',
  '/portfolio',
  '/contact',
  '/legalnotice'
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(route => {
    return `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  })
  .join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);

console.log('✅ Sitemap généré avec succès !');
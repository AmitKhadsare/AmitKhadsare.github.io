import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.columbiacarehome.com';
const currentDate = new Date().toISOString().split('T')[0];

// Generate sitemap index
const generateSitemapIndex = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/image-sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
};

// Write sitemap index to public directory
const sitemapIndexContent = generateSitemapIndex();
const publicDir = path.join(process.cwd(), 'public');
const sitemapIndexPath = path.join(publicDir, 'sitemap-index.xml');

fs.writeFileSync(sitemapIndexPath, sitemapIndexContent);
console.log('✅ Sitemap index generated successfully at:', sitemapIndexPath);

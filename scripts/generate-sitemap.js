import fs from 'fs';
import path from 'path';
import { routes } from '../src/data/routes.js';

const baseUrl = 'https://www.columbiacarehome.com';
const currentDate = new Date().toISOString().split('T')[0];

// Generate XML sitemap
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const publicDir = path.join(process.cwd(), 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemapContent);
console.log('✅ Sitemap generated successfully at:', sitemapPath);

// Also generate image sitemap and sitemap index
Promise.all([
  import('./generate-image-sitemap.js'),
  import('./generate-sitemap-index.js')
]).catch(console.error);

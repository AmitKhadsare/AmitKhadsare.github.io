import fs from 'fs';
import path from 'path';

// Define all routes with their priorities and change frequencies
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about-us', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/facility', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-a-tour', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/rehabilitation', priority: '0.8', changefreq: 'monthly' },
  { path: '/memory-care', priority: '0.8', changefreq: 'monthly' },
  { path: '/personal-assistance', priority: '0.8', changefreq: 'monthly' },
  { path: '/residential-care', priority: '0.8', changefreq: 'monthly' },
  { path: '/dietary', priority: '0.7', changefreq: 'monthly' },
  { path: '/recreation', priority: '0.7', changefreq: 'monthly' },
  { path: '/health-safety', priority: '0.7', changefreq: 'monthly' },
  { path: '/family-partnership', priority: '0.7', changefreq: 'monthly' },
  { path: '/careers', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' }
];

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

import { blogs } from './blogs.js';

// Static routes
const staticRoutes = [
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
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { path: '/virtual-tour', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' }
];

// Dynamic blog post routes
const blogRoutes = blogs.map(blog => ({
    path: `/blog/${blog.slug}`,
    priority: '0.7',
    changefreq: 'monthly'
}));

// Combine all routes
export const routes = [...staticRoutes, ...blogRoutes];

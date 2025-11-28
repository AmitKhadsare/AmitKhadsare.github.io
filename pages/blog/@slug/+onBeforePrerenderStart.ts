// Provide blog post URLs for pre-rendering
import { blogRoutes } from '../../../src/data/routes.js';

export default function onBeforePrerenderStart() {
    const urlList = blogRoutes.map(route => route.path);

    console.log('[onBeforePrerenderStart] Providing URLs for blog posts:', urlList);
    return urlList;
}

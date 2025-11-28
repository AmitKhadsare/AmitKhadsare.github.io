// This hook tells Vike which URLs to pre-render for our catch-all route
import { staticRoutes } from '../src/data/routes.js';

export default function onBeforePrerenderStart() {
    // Only return static routes here. Blog routes are handled by pages/blog/@slug/+onBeforePrerenderStart.ts
    const urlList = staticRoutes.map(route => route.path);

    // Use a Set to automatically remove any duplicate URLs
    const uniqueUrls = [...new Set(urlList)];

    console.log('[onBeforePrerenderStart] Providing URLs for pre-rendering (static):', uniqueUrls);
    return uniqueUrls;
}

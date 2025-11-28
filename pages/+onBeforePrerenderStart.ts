// This hook tells Vike which URLs to pre-render for our catch-all route
import { routes } from '../src/data/routes.js';

export default function onBeforePrerenderStart() {
    const urlList = routes.map(route => route.path);

    // Use a Set to automatically remove any duplicate URLs
    const uniqueUrls = [...new Set(urlList)];

    console.log('[onBeforePrerenderStart] Providing URLs for pre-rendering:', uniqueUrls);
    return uniqueUrls;
}

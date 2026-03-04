// This hook tells Vike which URLs to pre-render for our catch-all route
import { staticRoutes } from '../src/data/routes.js';

export default function onBeforePrerenderStart() {
    // Exclude routes that have their own dedicated Vike page folders
    const excludedRoutes = ['/', '/contact', '/careers', '/blog'];

    const urlList = staticRoutes
        .map(route => route.path)
        .filter(path => !excludedRoutes.includes(path));

    const uniqueUrls = [...new Set(urlList)];

    console.log('[onBeforePrerenderStart] Providing URLs for catch-all pre-rendering:', uniqueUrls);
    return uniqueUrls;
}

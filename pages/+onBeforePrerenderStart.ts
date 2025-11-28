// This hook tells Vike which URLs to pre-render for our catch-all route
import { routes } from '../src/data/routes.js';

export default function onBeforePrerenderStart() {
    const routePaths = routes.map(route => route.path);

    console.log('[onBeforePrerenderStart] Providing URLs for pre-rendering:', routePaths);
    return routePaths;
}

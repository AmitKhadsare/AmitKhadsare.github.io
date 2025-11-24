// This hook tells Vike which URLs to pre-render for our catch-all route
export default function onBeforePrerenderStart() {
    const routes = [
        '/',
        '/about-us',
        '/facility',
        '/services',
        '/contact',
        '/schedule-a-tour',
        '/faq',
        '/rehabilitation',
        '/memory-care',
        '/personal-assistance',
        '/residential-care',
        '/dietary',
        '/recreation',
        '/health-safety',
        '/family-partnership',
        '/careers',
        '/privacy-policy',
        '/terms-of-service',
        '/virtual-tour'
    ];

    console.log('[onBeforePrerenderStart] Providing URLs for pre-rendering:', routes);
    return routes;
}

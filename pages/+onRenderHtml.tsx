import ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import App from '../src/App';

export { onRenderHtml };

/**
 * Vike Server-Side Rendering (SSR) Hook
 * 
 * This function runs during the BUILD PROCESS (not at runtime) to convert
 * your React components into static HTML files.
 * 
 * Flow:
 * 1. Vike calls this function once for EACH route in +config.ts
 * 2. ReactDOMServer renders your React app to an HTML string
 * 3. react-helmet-async captures all <Helmet> tags
 * 4. We inject the captured meta tags into the HTML template
 * 5. Vike saves the result to dist/client/<route>/index.html
 * 
 * Example: For route "/about-us"
 *   - Input: React components with JSX
 *   - Output: dist/client/about-us/index.html (full HTML with baked-in meta tags)
 */
async function onRenderHtml(pageContext: any) {
    // ============================================================
    // SECTION 1: Extract the current route being rendered
    // ============================================================

    const { urlPathname } = pageContext;
    console.log(`[SSR] Rendering route: ${urlPathname}`);

    // Example: urlPathname = "/about-us" when rendering the about-us page
    // Vike will call this function multiple times during build,
    // once for each route in our +config.ts prerender array


    // ============================================================
    // SECTION 2: Create Helmet context to capture meta tags
    // ============================================================

    const helmetContext = {} as any;

    // This is an EMPTY object that react-helmet-async will MUTATE.
    // After rendering, it will contain all the <Helmet> tags from your components.
    // 
    // Think of it as a "recording device" that captures meta tags during SSR:
    //   - Your SEOHead component renders: <Helmet><title>About Us</title></Helmet>
    //   - HelmetProvider intercepts this and stores it in helmetContext
    //   - After rendering, helmetContext.helmet.title will contain the title tag


    // ============================================================
    // SECTION 3: Render React app to HTML string (THE MAGIC!)
    // ============================================================

    let appHtml: string;

    try {
        appHtml = ReactDOMServer.renderToString(
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={urlPathname}>
                    <App />
                </StaticRouter>
            </HelmetProvider>
        );

        console.log(`[SSR] ✓ Rendered ${urlPathname} - HTML length: ${appHtml.length} chars`);

    } catch (error) {
        console.error(`[SSR] ✗ Error rendering ${urlPathname}:`, error);
        throw error; // Fail the build if SSR fails
    }

    // ──────────────────────────────────────────────────────────
    // What just happened?
    // ──────────────────────────────────────────────────────────
    // ReactDOMServer.renderToString() executed your React components
    // in Node.js (not a browser!) and converted them to HTML.
    //
    // StaticRouter told React Router "pretend we're on /about-us"
    // so it rendered the correct route without needing window.location
    //
    // HelmetProvider captured all <Helmet> tags into helmetContext
    // ──────────────────────────────────────────────────────────


    // ============================================================
    // SECTION 4: Extract helmet data (meta tags, title, etc.)
    // ============================================================

    const { helmet } = helmetContext;

    if (!helmet) {
        console.warn(`[SSR] ⚠️  No helmet data captured for ${urlPathname}`);
        console.warn('[SSR] This means no <SEOHead> component was rendered.');
    } else {
        console.log(`[SSR] ✓ Captured helmet data:`);
        console.log(`[SSR]   - Title: ${helmet.title?.toString()?.substring(0, 60)}...`);
        console.log(`[SSR]   - Meta tags: ${helmet.meta?.toString()?.length || 0} chars`);
    }

    // helmet now contains objects with .toString() methods:
    // {
    //   title: { toString: () => "<title>About Us | Columbia Care Home</title>" },
    //   meta: { toString: () => "<meta name='description' content='...'><meta property='og:...'>" },
    //   link: { toString: () => "<link rel='canonical' href='...'>" },
    //   script: { toString: () => "<script type='application/ld+json'>...</script>" }
    // }


    // ============================================================
    // SECTION 5: Build the complete HTML document
    // ============================================================

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        ${helmet ? dangerouslySkipEscape(helmet.title.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.meta.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.link.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.script.toString()) : ''}
        
        <!-- Static assets from original index.html -->
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <!-- Meta Tags -->
        <meta name="author" content="Columbia Care Home" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        <!-- Local Business Meta Tags -->
        <meta name="geo.region" content="US-MD" />
        <meta name="geo.placename" content="Columbia" />
        <meta name="geo.position" content="39.2037;-76.8610" />
        <meta name="ICBM" content="39.2037, -76.8610" />
        
        <!-- Theme -->
        <meta name="theme-color" content="#059669" />
        <meta name="msapplication-TileColor" content="#059669" />
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;

    // ──────────────────────────────────────────────────────────
    // What is dangerouslySkipEscape()?
    // ──────────────────────────────────────────────────────────
    // By default, escapeInject (the template literal tag) escapes
    // all variables to prevent XSS attacks.
    //
    // But we WANT to inject raw HTML (meta tags, app content).
    // dangerouslySkipEscape() tells Vike: "Trust this HTML, don't escape it"
    //
    // Why it's safe here:
    //   - helmet tags come from OUR code (SEOHead.tsx), not user input
    //   - appHtml comes from React.renderToString(), which escapes user data
    //   - We're not injecting arbitrary user input
    // ──────────────────────────────────────────────────────────


    // ============================================================
    // SECTION 6: Return the HTML document to Vike
    // ============================================================

    console.log(`[SSR] ✓ Built complete HTML for ${urlPathname}`);
    console.log(`[SSR] ─────────────────────────────────────────────────\n`);

    return {
        documentHtml,
        pageContext: {}, // Can pass data to client if needed
    };

    // Vike will now save this HTML to:
    // dist/client/about-us/index.html
    //
    // When a bot requests /about-us, Netlify serves this pre-rendered file.
    // When a user visits, their browser loads this HTML, then React hydrates it
    // and takes over for SPA navigation.
}

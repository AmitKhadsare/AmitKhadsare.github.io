export { onRenderClient };

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../src/App';

/**
 * Vike Client-Side Hydration Hook
 * 
 * This function runs in the BROWSER to hydrate the pre-rendered HTML.
 * It attaches React event handlers and makes the app interactive.
 * 
 * Flow:
 * 1. Browser loads pre-rendered HTML from server
 * 2. Vike calls this function
 * 3. React hydrates the static HTML (attaches event listeners)
 * 4. App becomes fully interactive
 */
async function onRenderClient(pageContext: any) {
    const container = document.getElementById('root')!;

    const page = (
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    );

    // For first render, hydrate pre-rendered HTML
    // For subsequent navigations (if implementing client-side routing with Vike)
    if (pageContext.isHydration) {
        ReactDOM.hydrateRoot(container, page);
    } else {
        // This branch won't be used since we're using React Router for client-side navigation
        const root = ReactDOM.createRoot(container);
        root.render(page);
    }
}

import "../src/index.css";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../src/App';

export { Page };

/**
 * Vike Page Component
 * 
 * This is the entry point that Vike renders for each route.
 * It wraps your existing React Router app, preserving all current functionality.
 */
function Page() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    );
}

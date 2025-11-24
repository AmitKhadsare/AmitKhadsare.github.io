import { useState, useEffect } from 'react';

/**
 * Returns true only after client-side hydration completes.
 * Use this to guard window/document access in SSR contexts.
 * 
 * @example
 * const isClient = useIsClient();
 * useEffect(() => {
 *   if (!isClient) return;
 *   window.addEventListener('scroll', handleScroll);
 * }, [isClient]);
 */
export function useIsClient() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}

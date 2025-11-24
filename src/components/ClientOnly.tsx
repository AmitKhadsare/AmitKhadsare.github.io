import { useState, useEffect, ReactNode } from 'react';

interface ClientOnlyProps {
    children: ReactNode;
    fallback?: ReactNode;
}

/**
 * Wrapper component that only renders children on the client side.
 * Prevents hydration mismatches for components that use browser APIs
 * or have different server/client rendering.
 * 
 * @example
 * <ClientOnly fallback={<div>Loading...</div>}>
 *   <ComponentWithAnimations />
 * </ClientOnly>
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}

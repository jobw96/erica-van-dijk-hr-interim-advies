import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    // Use useLayoutEffect to ensure scroll happens BEFORE paint, preventing any visible flash
    useLayoutEffect(() => {
        // Disable browser's default scroll restoration immediately
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Force instant scroll to top - no smooth behavior
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto' // CRITICAL: 'auto' means instant, no animation
        });

        // Also set document scroll position directly as a fallback
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname]);

    return null;
};

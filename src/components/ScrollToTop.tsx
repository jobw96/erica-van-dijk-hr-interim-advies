import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    // Use useLayoutEffect to ensure scroll happens before paint if possible, 
    // preventing a visible jump. Fallback to useEffect for SSR safety if needed (though this is client-side).
    useLayoutEffect(() => {
        // Disable browser's default scroll restoration to prevent it from 
        // trying to restore the scroll position from the previous page.
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Force scroll to top
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

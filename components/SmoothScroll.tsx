
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
    children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Synchronize Lenis with GSAP's ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Force a refresh to ensure start/end positions are correct
        ScrollTrigger.refresh();

        // Additional refreshes to handle dynamic content loading or layout shifts (common in Brave/Chrome)
        const timeouts = [
            setTimeout(() => ScrollTrigger.refresh(), 100),
            setTimeout(() => ScrollTrigger.refresh(), 500),
            setTimeout(() => ScrollTrigger.refresh(), 1000),
            setTimeout(() => ScrollTrigger.refresh(), 2000), // Catch-all for slow network/images
        ];

        return () => {
            timeouts.forEach(clearTimeout);
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;

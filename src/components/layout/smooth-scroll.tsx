"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const isMobile = window.innerWidth <= 768;

        const lenis = new Lenis({
            duration: isMobile ? 0.8 : 1.2, // Reduce duration for mobile
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: true, // Keep syncTouch, as smoothTouch does not exist
            touchMultiplier: isMobile ? 0.75 : 1.5, // Reduce touch speed on mobile
            infinite: false,
        });

        let rafId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;

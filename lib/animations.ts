import { gsap } from 'gsap';

export const ANIMATION_CONFIG = {
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    yOffset: 30, // Default y movement in pixels
};

export const fadeInUp = (element: Element | string | null, delay = 0) => {
    if (!element) return;
    return gsap.from(element, {
        opacity: 0,
        y: ANIMATION_CONFIG.yOffset,
        duration: ANIMATION_CONFIG.duration,
        ease: ANIMATION_CONFIG.ease,
        delay,
    });
};

export const staggerFadeInUp = (elements: Element[] | NodeListOf<Element> | string, delay = 0) => {
    if (!elements) return;
    return gsap.from(elements, {
        opacity: 0,
        y: ANIMATION_CONFIG.yOffset,
        duration: ANIMATION_CONFIG.duration,
        stagger: ANIMATION_CONFIG.stagger,
        ease: ANIMATION_CONFIG.ease,
        delay,
    });
};

export const revealOnScroll = (element: Element | string | null, delay = 0) => {
    if (!element) return;
    return gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: ANIMATION_CONFIG.yOffset,
        duration: ANIMATION_CONFIG.duration,
        ease: ANIMATION_CONFIG.ease,
        delay,
    });
};

export const staggerRevealOnScroll = (elements: Element[] | NodeListOf<Element> | string, trigger: Element | string | null, delay = 0) => {
    if (!trigger) return;
    return gsap.from(elements, {
        scrollTrigger: {
            trigger: trigger,
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: ANIMATION_CONFIG.yOffset,
        duration: ANIMATION_CONFIG.duration,
        stagger: ANIMATION_CONFIG.stagger,
        ease: ANIMATION_CONFIG.ease,
        delay,
    });
};

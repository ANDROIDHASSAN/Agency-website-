import { useRef, useLayoutEffect } from "react"
import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Create a looped array of testimonials for the marquee effect
    // We confirm we need enough items to fill the screen and loop smoothly
    const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            // Simple infinite marquee
            // We animate the track to the left. 
            // Since we don't know the exact pixel width easily without calculation, 
            // and we want it seamless, a common trick is to animate xPercent if we know the structure, 
            // or just animate 'x' by half the total scrollWidth if we duplicated it exactly once.
            // Here we duplicated 4 times. Let's try a logic that moves by the width of one set of testimonials.

            // However, a simpler approach for a "dumb" marquee is just to use CSS animation or a simple GSAP tween
            // that moves until the first item completely leaves and then resets, which requires precise calculation.

            // Let's use the 'xPercent' method which is robust for marquees.
            // If we have content X X X X, and we move to -50%, we are at the middle.

            // Let's calculate the width of a single set of items to determine the loop point.
            // But getting exact width can be tricky with layout thrashing.

            // Alternative: Simply animate to x: "-=1000" (arbitrary) is bad.

            // Best standard GSAP marquee:
            // 1. Calculate width of *original* content.
            // 2. Animate 'x' from 0 to -originalWidth.
            // 3. Modifiers or repeat.

            // To be safe and quick, I will just assume the track is very long and animate it slowly.
            // Actually, the previous implementation calculated 'scrollAmount'.

            // Let's use a time-based animation.

            const totalWidth = track.scrollWidth;
            // We have 4 sets. We want to move by 1 set's width, then reset? 
            // No, the simplest seamless loop is:
            // content: [A B C] [A B C]
            // Animate x from 0 to -width(A B C).
            // When it reaches -width(A B C), reset to 0 immediately.

            // Since we duplicated 4 times.
            // The single set width is roughly totalWidth / 4.

            const setWidth = totalWidth / 4;

            gsap.to(track, {
                x: -setWidth,
                duration: 20, // Adjust speed here
                ease: "none",
                repeat: -1,
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [testimonials]); // Re-run if testimonials change

    return (
        <div
            ref={sectionRef}
            className={cn(
                "bg-transparent text-foreground",
                "py-12 px-0 overflow-hidden relative", // Added relative
                className
            )}
        >
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center">
                <div className="flex flex-col items-center gap-4 px-4 mb-16">
                    <h2 className="text-lg font-bold uppercase tracking-widest text-indigo-400">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-md max-w-[600px] font-medium text-white/50 sm:text-lg">
                            {description}
                        </p>
                    )}
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex flex-row items-stretch gap-8 px-4"
                        style={{ width: "max-content" }}
                    >
                        {loopedTestimonials.map((testimonial, i) => (
                            <div key={`track-${i}`} className="shrink-0 w-[400px] whitespace-normal">
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>

                    {/* Gradient overlays for smooth fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
                </div>
            </div>
        </div>
    )
}

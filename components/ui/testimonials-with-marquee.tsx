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
    // Two sets are enough for a seamless loop with the xPercent method
    const loopedTestimonials = [...testimonials, ...testimonials];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            const totalWidth = track.scrollWidth;
            const setWidth = totalWidth / 2;

            gsap.to(track, {
                x: -setWidth,
                duration: 30, // Slower, more professional speed
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
                "py-12 px-0 overflow-hidden relative",
                className
            )}
        >
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center">
                <div className="flex flex-col items-center gap-4 px-4 mb-16">
                    <h2 className="text-lg font-bold uppercase tracking-widest text-primary">
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

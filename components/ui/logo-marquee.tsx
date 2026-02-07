
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
    items: Array<{
        name: string;
        logo?: string;
    }>;
    className?: string;
    speed?: string; // e.g. "40s"
}

export function LogoMarquee({
    items,
    className,
    speed = "30s"
}: LogoMarqueeProps) {
    return (
        <div className={cn(
            "relative flex w-full flex-col items-center justify-center overflow-hidden py-4",
            className
        )}>
            <div
                className="group flex overflow-hidden p-2 [--gap:4rem] [gap:var(--gap)] flex-row"
                style={{ '--duration': speed } as React.CSSProperties}
            >
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                    {[...Array(2)].map((_, setIndex) => (
                        items.map((item, i) => (
                            <div
                                key={`set1-${setIndex}-${i}`}
                                className="flex items-center gap-2 group/item cursor-default"
                            >
                                {item.logo ? (
                                    <img src={item.logo} alt={item.name} className="h-6 w-auto grayscale opacity-50 group-hover/item:opacity-100 group-hover/item:grayscale-0 transition-all duration-300" />
                                ) : (
                                    <span className="text-xl font-black tracking-tighter text-white/30 group-hover/item:text-blue-400 transition-colors duration-300">

                                        {item.name}
                                    </span>
                                )}
                            </div>
                        ))
                    ))}
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row" aria-hidden="true">
                    {[...Array(2)].map((_, setIndex) => (
                        items.map((item, i) => (
                            <div
                                key={`set2-${setIndex}-${i}`}
                                className="flex items-center gap-2 group/item cursor-default"
                            >
                                {item.logo ? (
                                    <img src={item.logo} alt={item.name} className="h-6 w-auto grayscale opacity-50 group-hover/item:opacity-100 group-hover/item:grayscale-0 transition-all duration-300" />
                                ) : (
                                    <span className="text-xl font-black tracking-tighter text-white/30 group-hover/item:text-blue-400 transition-colors duration-300">

                                        {item.name}
                                    </span>
                                )}
                            </div>
                        ))
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
        </div>
    );
}

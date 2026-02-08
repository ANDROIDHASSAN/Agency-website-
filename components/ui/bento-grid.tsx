import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    onClick,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "group relative row-span-1 rounded-[1.5rem] border-[0.75px] border-white/10 p-2 md:p-3 transition-transform duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between overflow-hidden",
                className
            )}
        >
            {/* Glow Effect / Background is handled by parent or internal wrapper if needed */}
            <div className="glass-card relative flex h-full flex-col justify-between overflow-hidden p-6 md:p-8 hover:border-blue-500/30 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 shadow-none transition duration-200">
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    {icon}
                    <div className="font-sans font-bold text-neutral-200 mb-2 mt-4 text-xl">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-neutral-400 text-sm">
                        {description}
                    </div>
                </div>
                {header && <div className="mt-4">{header}</div>}
            </div>
        </div>
    );
};

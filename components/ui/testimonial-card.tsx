import { cn } from "@/lib/utils"
// Simplified Avatar since we might just want logos or simple text for "Trusted By"
// But keeping structure for now.
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href } : {})}
            className={cn(
                "flex flex-col rounded-lg border-t",
                "bg-gradient-to-b from-white/5 to-white/0", // Modified for dark theme
                "p-4 text-start sm:p-6",
                "hover:from-white/10 hover:to-white/5",
                "max-w-[320px] sm:max-w-[320px]",
                "transition-colors duration-300",
                "border-white/10", // Added border color
                className
            )}
        >
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border border-white/10">
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-md font-semibold leading-none text-white">
                        {author.name}
                    </h3>
                    <p className="text-sm text-white/50">
                        {author.handle}
                    </p>
                </div>
            </div>
            <p className="sm:text-md mt-4 text-sm text-white/70">
                {text}
            </p>
        </Card>
    )
}

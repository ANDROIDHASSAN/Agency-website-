import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "group relative overflow-hidden bg-neutral-800 border text-left text-gray-50 font-bold rounded-lg transition-all duration-500",
    {
        variants: {
            variant: {
                default: `
          hover:border-rose-300 hover:text-rose-300 hover:decoration-2 underline-offset-2 hover:underline hover:underline-offset-4
          
          before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg before:duration-500
          group-hover:before:duration-500 group-hover:before:right-12 group-hover:before:-bottom-8 group-hover:before:blur group-hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf]
          
          after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg after:duration-500
          group-hover:after:duration-500 group-hover:after:-right-8
        `,
                outline: "bg-transparent border border-white/10 hover:bg-white/5 hover:border-white/20 text-white shadow-none",
            },
            size: {
                default: "h-16 w-64 p-3 text-base",
                sm: "h-12 w-48 p-2 text-sm",
                lg: "h-20 w-80 p-4 text-lg",
                icon: "h-10 w-10",
                auto: "h-auto w-auto p-3" // For flexibility
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }

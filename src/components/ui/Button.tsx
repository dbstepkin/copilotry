import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-primary-blue text-white hover:bg-primary-blue/90 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all active:scale-[0.98]',
            secondary: 'bg-surface border border-border text-text-main hover:bg-border/50 transition-colors',
            ghost: 'text-text-muted hover:text-text-main transition-colors',
        }

        const sizes = {
            sm: 'px-4 py-2 text-sm rounded-xl',
            md: 'px-6 py-3 text-base rounded-2xl',
            lg: 'px-8 py-4 text-lg font-medium rounded-2xl',
        }

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 disabled:pointer-events-none disabled:opacity-50',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

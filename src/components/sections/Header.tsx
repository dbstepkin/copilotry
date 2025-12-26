"use client"

import React from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export const Header = ({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'How it works', href: '#how-it-works' },
        { name: 'Filters', href: '#filters' },
        { name: 'Use cases', href: '#use-cases' },
        { name: 'FAQ', href: '#faq' },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-blue flex items-center justify-center font-mono font-bold text-white text-xl">
                        C
                    </div>
                    <span className="font-bold text-xl tracking-tight text-text-main font-mono">CoPilotry</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="primary" size="sm" onClick={onJoinWaitlist}>
                        Join waitlist
                    </Button>
                </div>
            </div>
        </header>
    )
}

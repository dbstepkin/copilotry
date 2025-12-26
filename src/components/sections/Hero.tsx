"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { RotatingText } from '@/components/ui/RotatingText'
import { ExternalLink, CheckCircle2, Search } from 'lucide-react'
import { useWaitlist } from '@/hooks/useWaitlist'

export const Hero = ({ onJoinWaitlist }: { onJoinWaitlist?: (email: string) => void }) => {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (onJoinWaitlist) {
            onJoinWaitlist(email)
        }
    }

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background visual elements */}
            <div className="absolute inset-0 radar-grid opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-purple/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Subtle Radar Sweep */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-blue/10 rounded-full pointer-events-none">
                <div className="absolute inset-0 animate-radar-sweep origin-center">
                    <div className="w-1/2 h-px bg-gradient-to-r from-transparent to-primary-blue/30 scale-x-100" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center w-full"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20 mb-6 backdrop-blur-sm">
                        <span className="text-xs font-bold tracking-wider uppercase">Early beta perk: 100 profiles free</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-5xl leading-[1.2] flex flex-col items-center">
                        <span className="flex items-center justify-center flex-wrap gap-y-2 text-center">
                            Shortlist the right
                            <RotatingText words={['co-founder', 'advisor']} />
                            with contextual search
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted mb-10 max-w-3xl text-balance mx-auto">
                        Generate an AI-filtered shortlist from public profiles with proof links, and move fast with direct outreach instead of waiting for replies on marketplaces.
                    </p>

                    <form
                        id="waitlist"
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 w-full max-w-md mx-auto mb-4"
                    >
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-2xl bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary-blue/50 text-text-main transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button type="submit" size="md">
                                Claim beta spot
                            </Button>
                        </div>
                    </form>
                    <p className="text-sm text-text-muted/60 mb-16">
                        Launching January 2026.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { RotatingText } from '@/components/ui/RotatingText'
import { ExternalLink, CheckCircle2, Search } from 'lucide-react'
import { useWaitlist } from '@/hooks/useWaitlist'

export const Hero = () => {
    const [email, setEmail] = useState('')
    const [who, setWho] = useState('')
    const { submitEmail, isLoading, isSuccess, error } = useWaitlist()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await submitEmail(email, who)
        if (!error) {
            setEmail('')
            setWho('')
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
                        <span className="text-xs font-bold tracking-wider uppercase">No LinkedIn account required</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-5xl leading-[1.2] flex flex-col items-center">
                        <span className="flex items-center justify-center flex-wrap gap-y-2">
                            Find your perfect
                            <RotatingText words={['copilot', 'adviser', 'co-founder']} />
                        </span>
                        <span className="block mt-2">with unparalleled precision</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted mb-10 max-w-3xl text-balance mx-auto">
                        Perfect-fit shortlist with contextual filters in 4 minutes, instead of a week lost in LinkedIn.
                    </p>

                    {!isSuccess ? (
                        <>
                            <form
                                id="waitlist"
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4 w-full max-w-lg mx-auto mb-4"
                            >
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your work email"
                                        className="w-full px-4 py-3 rounded-2xl bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary-blue/50 text-text-main transition-all"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-left text-xs font-medium text-text-muted ml-1">Who are you trying to find?</label>
                                        <textarea
                                            required
                                            placeholder="(e.g. Co-founder, AI background, full-stack, US-based, founder experience, salestech)"
                                            className="w-full px-4 py-3 rounded-2xl bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary-blue/50 text-text-main transition-all min-h-[100px] resize-none"
                                            value={who}
                                            onChange={(e) => setWho(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <Button type="submit" size="md" disabled={isLoading} className="w-full">
                                    {isLoading ? 'Joining...' : 'Join waitlist'}
                                </Button>
                            </form>
                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        </>
                    ) : (
                        <div className="flex flex-col items-center mb-8">
                            <div className="bg-emerald-500/10 text-emerald-500 px-6 py-3 rounded-2xl border border-emerald-500/20 font-bold">
                                You are on the waitlist! Stay tuned for launch news.
                            </div>
                        </div>
                    )}
                    <p className="text-sm text-text-muted/60 mb-16">
                        Launching January 2026.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

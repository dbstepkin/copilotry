"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, BrainCircuit } from 'lucide-react'

const examples = [
    {
        title: "CTO Experience",
        text: "Deep tech background + raised Series A+ + managed 20+ engineering team"
    },
    {
        title: "Founder DNA",
        text: "Founded 2+ tech startups + exited one + active angel investor"
    },
    {
        title: "Go-to-Market Expert",
        text: "Built sales from $0 to $10M ARR + 3+ successful B2B launches"
    },
    {
        title: "Product Leadership",
        text: "Led product at unicorn + deep AI/ML expertise + 6+ years in fast-growing startups"
    },
    {
        title: "Fundraising Prowess",
        text: "Raised $100M+ across 3 companies + strong VC relationships + strategic advisor"
    }
]

export const ContextualAI = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % examples.length)
        }, 4500)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-blue/5 opacity-30" />

            <div className="max-w-5xl mx-auto w-full relative z-10">
                {/* First Section: Contextual AI-analysis with carousel */}
                <div className="mb-20">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold font-mono leading-tight mb-4">
                            ...supercharged by <span className="relative inline-block text-primary-blue">
                                contextual AI-analysis
                                <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary-blue/10 -rotate-1" />
                            </span>
                        </h2>
                        <p className="text-text-muted text-lg max-w-full whitespace-nowrap">
                            Evaluate any criteria that can be inferred from a profile. If it's written between the lines, we find it.
                        </p>
                    </div>

                    <div className="relative h-48 md:h-64 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="absolute inset-0 flex flex-col items-center justify-center"
                            >
                                <div className="glass p-8 md:p-12 rounded-[2.5rem] border-primary-blue/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] max-w-2xl w-full">
                                    <div className="flex items-center justify-center gap-3 mb-4 text-primary-blue">
                                        <Sparkles size={24} />
                                        <span className="font-mono text-sm uppercase tracking-widest">{examples[index].title}</span>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-medium text-text-main italic leading-snug">
                                        "{examples[index].text}"
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 flex justify-center gap-2">
                        {examples.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                aria-label={`Show example ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-primary-blue' : 'w-2 bg-border'} hover:bg-primary-blue/70 focus:outline-none focus:ring-2 focus:ring-primary-blue/40`}
                            />
                        ))}
                    </div>
                </div>

                {/* Second Section intentionally removed */}
            </div>
        </section>
    )
}

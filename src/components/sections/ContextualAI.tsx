"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, BrainCircuit } from 'lucide-react'

const examples = [
    {
        title: "Technical Leadership",
        text: "AI engineering expertise + Full stack + Ex-founder background"
    },
    {
        title: "Strategic Growth",
        text: "Direct advising experience + personal track record in high-ticket sales"
    },
    {
        title: "Academic Excellence",
        text: "Cutting-edge AI research + Ivy League university degree"
    },
    {
        title: "Operational DNA",
        text: "Success in regulated markets + experience scaling from Seed to Series B"
    },
    {
        title: "Proven Mentorship",
        text: "Rapid internal promotions + verifiable experience in building engineering cultures"
    }
]

export const ContextualAI = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % examples.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-blue/5 opacity-30" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-start text-left">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-text-main">
                            Use cases
                        </h2>
                        <p className="text-text-muted text-lg max-w-lg">
                            Tailored for the most critical searches. From technical leads to strategic growth specialists, we find the DNA that matters.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-mono leading-tight">
                            ...supercharged by <span className="relative inline-block whitespace-nowrap">
                                <span className="relative z-10 text-primary-blue">contextual AI-analysis</span>
                                <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary-blue/10 -rotate-1" />
                            </span>
                        </h2>
                        <p className="text-text-muted text-lg max-w-lg">
                            Evaluate any criteria that can be inferred from a profile. If it's written between the lines, we find it.
                        </p>
                    </div>
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
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-primary-blue' : 'w-2 bg-border'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

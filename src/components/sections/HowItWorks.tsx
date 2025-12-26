"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Filter, Brain, UserCheck } from 'lucide-react'

export const HowItWorks = () => {
    const steps = [
        {
            icon: <Filter size={32} />,
            title: "Choose base criteria",
            desc: "Set hard filters like location, seniority, and industry to narrow down the search space.",
            bullets: []
        },
        {
            icon: <Brain size={32} />,
            title: "Add intelligent context",
            desc: "Explain what “good” looks like beyond keywords. Tell us what partner-fit looks like for this search.",
            bullets: [
                "Relevant experience in specific domain/function",
                "Deep experience in target countries",
                "Specific education and certifications"
            ]
        },
        {
            icon: <UserCheck size={32} />,
            title: "Get your shortlist",
            desc: "Receive a shortlist with reasoning and proof links. No more manual screening.",
            bullets: []
        }
    ]

    return (
        <section id="how-it-works" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
                    <p className="text-text-muted text-lg">From zero to your perfect match in three simple steps.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-3xl relative border-border/50"
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-blue flex items-center justify-center font-bold text-lg border-4 border-background">
                                {i + 1}
                            </div>
                            <div className="mb-6 text-primary-blue mt-2">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-text-muted mb-6">{step.desc}</p>

                            {step.bullets.length > 0 && (
                                <ul className="space-y-3">
                                    {step.bullets.map((bullet, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-text-main">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

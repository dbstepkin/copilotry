"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const useCases = [
    {
        id: 'advisor',
        label: 'Advisor',
        query: 'Product strategy advisor for B2B SaaS',
        context: 'Looking for someone who has scaled from $1M to $50M ARR. Must have experience in European markets and deep understanding of PLG.',
        candidates: [
            { name: "Marc Peterson", title: "Scale-up Specialist", reasons: ["Scaled Segment from $10M to $100M", "Advisor to 4 unicorn startups"] },
            { name: "Elena Rossi", title: "VP Product @ European Tech", reasons: ["PLG expert", "Strong footprint in Berlin & London"] }
        ]
    },
    {
        id: 'co-founder',
        label: 'Co-founder',
        query: 'CTO / Technical Co-founder for BioTech startup',
        context: 'PhD in BioEngineering or related field. Previous experience in founding a venture-backed startup. Based in SF or relocatable.',
        candidates: [
            { name: "David Kim, PhD", title: "Former BioTech Founder", reasons: ["PhD from MIT", "Raised $20M for last venture"] },
            { name: "Sarah Miller", title: "Senior Research Scientist", reasons: ["Lead at GenoTech", "3x patented inventor"] }
        ]
    }
]

export const UseCases = () => {
    const [activeTab, setActiveTab] = useState(useCases[0].id)

    const activeData = useCases.find(uc => uc.id === activeTab)!

    const handleTabClick = (id: string) => {
        // Tracking event: switch_usecase_tab
        console.log('Analytics Event: switch_usecase_tab', { tabId: id })
        setActiveTab(id)
    }

    return (
        <section id="use-cases" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">


                <div className="flex justify-center mb-12">
                    <div className="flex p-1 bg-surface border border-border rounded-full">
                        {useCases.map((uc) => (
                            <button
                                key={uc.id}
                                onClick={() => handleTabClick(uc.id)}
                                className={cn(
                                    "px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                                    activeTab === uc.id
                                        ? "bg-primary-blue text-white shadow-lg"
                                        : "text-text-muted hover:text-text-main"
                                )}
                            >
                                {uc.label}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="glass rounded-3xl p-8 border-border/50"
                    >
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary-blue mb-2">Example Query</h4>
                                    <p className="text-xl font-medium text-text-main italic">"{activeData.query}"</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary-purple mb-2">Intelligent Context</h4>
                                    <div className="bg-background/40 border border-white/5 p-4 rounded-xl text-text-muted leading-relaxed">
                                        {activeData.context}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-2">Output Preview</h4>
                                {activeData.candidates.map((candidate, i) => (
                                    <div key={i} className="bg-background/60 border border-white/5 p-4 rounded-xl">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h5 className="font-semibold text-text-main">{candidate.name}</h5>
                                                <p className="text-xs text-text-muted">{candidate.title}</p>
                                            </div>
                                            <ExternalLink size={14} className="text-primary-blue" />
                                        </div>
                                        <div className="space-y-1">
                                            {candidate.reasons.map((reason, j) => (
                                                <div key={j} className="flex items-center gap-2 text-[10px] text-text-muted/80">
                                                    <CheckCircle2 size={10} className="text-primary-blue shrink-0" />
                                                    {reason}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

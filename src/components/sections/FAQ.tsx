"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqItems = [
    {
        question: "What do I get: links only or exports?",
        answer: "You get a dashboard with ranked profiles, reasoning for each match, and direct LinkedIn profile links. Enterprise users can export candidate shortlists to CSV or JSON formats."
    },
    {
        question: "What is intelligent context?",
        answer: "It's our NLP-powered layer that allows you to describe nuance. Instead of just searching for 'Product Manager', you can specify 'A leader who has transitioned a company from sales-led to product-led growth', and we will find the evidence in their career history."
    },
    {
        question: "Can I exclude companies or locations?",
        answer: "Yes, you have full control over negative filters. You can exclude specific companies, industries, or even countries to ensure you only see relevant candidates."
    },
    {
        question: "How is deduplication handled?",
        answer: "Our system automatically identifies and merges duplicate profiles from multiple data sources, ensuring you don't waste time on the same candidate twice."
    },
    {
        question: "When do you launch?",
        answer: "The private beta starts in January 2026. Join the waitlist now to be among the first users to get access."
    },
    {
        question: "Do you support email discovery?",
        answer: "Currently, we focus on high-precision profile discovery. Email discovery is planned for a later phase in 2026 for selected tiers."
    }
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="min-h-screen flex flex-col justify-center py-24 px-6 relative">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">FAQ</h2>
                </div>

                <div className="space-y-4">
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            className="border border-border rounded-2xl overflow-hidden bg-surface/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-semibold text-text-main">{item.question}</span>
                                <ChevronDown
                                    className={cn("text-text-muted transition-transform duration-300", openIndex === i && "rotate-180")}
                                    size={20}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-border/50">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

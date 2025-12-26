"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export const Pricing = ({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) => {
    return (
        <section id="pricing" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
                    <p className="text-text-muted text-lg">Simple, usage-based model with no hidden fees.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass rounded-[2.5rem] p-8 md:p-12 border-primary-blue/20 bg-primary-blue/5 relative overflow-hidden flex flex-col items-center"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <div className="w-24 h-24 rounded-full border-8 border-primary-blue" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">Pay-as-you-go</h3>
                    <div className="flex flex-col items-center mb-8">
                        <span className="text-5xl md:text-7xl font-bold text-text-main">$0.05</span>
                        <span className="text-text-muted text-sm mt-2">per profile that fits your base criteria + contextual AI analysis on top.</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl mb-10">
                        {[
                            "No monthly subscription",
                            "Full access to all filters",
                            "Contextual intelligence included",
                            "LinkedIn profile extraction",
                            "Direct contact discovery",
                            "Export to CSV/XLSX"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-text-main/80">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onJoinWaitlist}
                        className="w-full max-w-sm py-4 rounded-2xl bg-primary-blue text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
                    >
                        Join waitlist
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

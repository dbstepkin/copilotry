"use client"

import React from 'react'
import { Clock, Filter, Building2 } from 'lucide-react'

export const ValueBlock = () => {
    const values = [
        {
            icon: <Clock className="text-primary-blue" size={24} />,
            title: "Save weeks on search",
            text: "Direct access to perfect matches without the endless LinkedIn scroll."
        },
        {
            icon: <Filter className="text-primary-purple" size={24} />,
            title: "Semantic profile filters",
            text: "Filter by any meaningful aspect of a person's profile, not just keywords."
        },
        {
            icon: <Building2 className="text-accent-cyan" size={24} />,
            title: "Advanced company filters",
            text: "Target specific current company parameters to narrow down the ideal experience."
        }
    ]

    return (
        <section className="min-h-screen flex flex-col justify-center py-24 px-6 bg-surface/30">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                {values.map((v, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary-blue/30 transition-colors">
                            {v.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-text-main">{v.title}</h3>
                        <p className="text-text-muted leading-relaxed">
                            {v.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

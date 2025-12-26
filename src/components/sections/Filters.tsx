"use client"

import React from 'react'

export const Filters = () => {
    const criteria = [
        "Industry",
        "Locations",
        "Current Company",
        "Past Company",
        "School",
        "Current Job Title",
        "Past Job Title",
        "Years of Experience",
        "Years at Current Company",
        "Seniority Level",
        "Function",
        "Profile Languages",
        "Recently Changed Jobs"
    ]

    return (
        <section id="filters" className="min-h-[70vh] flex flex-col justify-center py-24 px-6 bg-surface/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">Base criteria</h2>
                        <p className="text-text-muted text-lg">Narrow down your search with powerful hard filters before adding intelligent context.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
                    {criteria.map((item, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-xl border border-border bg-background hover:border-primary-blue/50 transition-colors flex items-center gap-3 group"
                        >
                            <div className="w-1.5 h-6 bg-primary-blue/30 group-hover:bg-primary-blue transition-colors rounded-full" />
                            <span className="text-text-main font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

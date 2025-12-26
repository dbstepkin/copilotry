"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Linkedin } from 'lucide-react'

const candidates = [
    {
        name: "Thomas Shelbourne",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
        criteria: [true, true, true]
    },
    {
        name: "Sarah Jenkins",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        criteria: [true, false, true]
    },
    {
        name: "Michael Vo",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        criteria: [false, true, true]
    },
    {
        name: "Elena Richardson",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
        criteria: [true, true, false]
    }
]

export const ResultsVisual = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-[#F8FAFC]">
            <div className="max-w-5xl w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0F172A]">Precision Verification</h2>
                    <p className="text-[#64748B] text-lg">Every candidate is matched against your unique constraints.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden"
                >
                    <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-slate-300" />
                            <div className="w-3 h-3 rounded-full bg-slate-300" />
                            <div className="w-3 h-3 rounded-full bg-slate-300" />
                        </div>
                        <div className="ml-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Candidate Comparison Matrix</div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-100 italic">
                                    <th className="px-8 py-6 text-sm font-bold text-slate-900">Candidate</th>
                                    <th className="px-6 py-6 text-sm font-bold text-slate-900 text-center">Profile</th>
                                    <th className="px-6 py-6 text-sm font-bold text-slate-400 text-center">Your criteria 1</th>
                                    <th className="px-6 py-6 text-sm font-bold text-slate-400 text-center">Your criteria 2</th>
                                    <th className="px-6 py-6 text-sm font-bold text-slate-400 text-center">Your criteria 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {candidates.map((person, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <img src={person.photo} alt={person.name} className="w-10 h-10 rounded-full bg-slate-100" />
                                                <span className="font-semibold text-slate-700">{person.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all">
                                                <Linkedin size={16} />
                                            </a>
                                        </td>
                                        {person.criteria.map((match, j) => (
                                            <td key={j} className="px-6 py-5 text-center">
                                                <div className="flex justify-center">
                                                    {match ? (
                                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                            <Check size={18} strokeWidth={3} />
                                                        </div>
                                                    ) : (
                                                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                                                            <X size={18} strokeWidth={3} />
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-6 bg-emerald-50/50 border-t border-emerald-100 flex items-center justify-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-sm font-medium text-emerald-700">Perfect Match Found: Thomas Shelbourne meets all 12 smart filters.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

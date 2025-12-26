"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RotatingTextProps {
    words: string[]
    interval?: number
}

export const RotatingText: React.FC<RotatingTextProps> = ({ words, interval = 2200 }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length)
        }, interval)
        return () => clearInterval(timer)
    }, [words, interval])

    return (
        <span className="relative inline-flex items-center overflow-hidden h-[1.2em] mx-2 px-3 bg-primary-blue/10 rounded-xl min-w-[3.5em] md:min-w-[4.5em] justify-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 flex items-center justify-center font-mono text-primary-blue whitespace-nowrap px-3 text-[0.85em]"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
            {/* Invisible placeholder to maintain width based on longest word */}
            <span className="invisible font-mono px-3 whitespace-nowrap text-[0.85em]">co-founder</span>
        </span>
    )
}

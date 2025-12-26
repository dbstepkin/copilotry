"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useWaitlist } from '@/hooks/useWaitlist'

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
    initialEmail?: string
}

export const WaitlistModal = ({ isOpen, onClose, initialEmail = '' }: WaitlistModalProps) => {
    const { submitEmail, isLoading, isSuccess, error } = useWaitlist()
    const [email, setEmail] = useState(initialEmail)
    const [who, setWho] = useState('')
    const [step, setStep] = useState<'email' | 'who'>(initialEmail ? 'who' : 'email')

    // Reset step and email when modal is closed/reopened
    React.useEffect(() => {
        if (isOpen) {
            setEmail(initialEmail)
            setStep(initialEmail ? 'who' : 'email')
            setWho('')
        }
    }, [isOpen, initialEmail])

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) setStep('who')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await submitEmail(email, who)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md glass p-8 rounded-[2.5rem] border-primary-blue/30 shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-text-muted hover:text-text-main transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {!isSuccess ? (
                            <>
                                <h3 className="text-2xl font-bold mb-2">Join the waitlist</h3>
                                <p className="text-text-muted mb-8">
                                    {step === 'email' ? 'Be the first to meet your next copilot.' : 'Help us find exactly what you need.'}
                                </p>

                                <form onSubmit={step === 'email' ? handleNextStep : handleSubmit} className="space-y-4">
                                    <div className="space-y-4">
                                        {step === 'email' ? (
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary-blue/50 text-text-main transition-all"
                                            />
                                        ) : (
                                            <div className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                                <label className="text-left text-xs font-medium text-text-muted ml-1">Who are you trying to find?</label>
                                                <textarea
                                                    required
                                                    autoFocus
                                                    placeholder="(e.g. Co-founder, AI background, full-stack, US-based, founder experience, salestech)"
                                                    className="w-full px-4 py-3 rounded-2xl bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary-blue/50 text-text-main transition-all min-h-[120px] resize-none"
                                                    value={who}
                                                    onChange={(e) => setWho(e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Joining...' : step === 'email' ? 'Next step' : 'Secure my spot'}
                                    </Button>
                                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-6">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">You're on the list!</h3>
                                <p className="text-text-muted">
                                    Thank you for joining. Stay tuned for launch news—we'll be in touch soon.
                                </p>
                                <Button onClick={onClose} className="mt-8 px-12" variant="secondary">
                                    Close
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

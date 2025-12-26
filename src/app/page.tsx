"use client"

import React, { useState } from 'react'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ResultsVisual } from '@/components/sections/ResultsVisual'
import { Filters } from '@/components/sections/Filters'
import { ContextualAI } from '@/components/sections/ContextualAI'
import { UseCases } from '@/components/sections/UseCases'
import { Pricing } from '@/components/sections/Pricing'
import { LaunchBand } from '@/components/sections/LaunchBand'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'
import { WaitlistModal } from '@/components/ui/WaitlistModal'

export default function Home() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
    const [waitlistEmail, setWaitlistEmail] = useState('')

    const openWaitlist = (email?: string) => {
        if (typeof email === 'string') {
            setWaitlistEmail(email)
        } else {
            setWaitlistEmail('')
        }
        setIsWaitlistOpen(true)
    }

    return (
        <main className="min-h-screen bg-background text-text-main selection:bg-primary-blue/30 overflow-x-hidden">
            <Header onJoinWaitlist={() => openWaitlist()} />
            <Hero onJoinWaitlist={openWaitlist} />
            <HowItWorks />
            <ResultsVisual />
            <Filters />
            <ContextualAI />
            <UseCases />
            <Pricing onJoinWaitlist={() => openWaitlist()} />
            <LaunchBand onJoinWaitlist={() => openWaitlist()} />
            <FAQ />
            <Footer />

            <WaitlistModal
                isOpen={isWaitlistOpen}
                onClose={() => setIsWaitlistOpen(false)}
                initialEmail={waitlistEmail}
            />
        </main>
    )
}

"use client"

import React from 'react'
import { Button } from '@/components/ui/Button'

export const LaunchBand = ({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) => {
    return (
        <section className="min-h-screen flex flex-col justify-center py-20 px-6">
            <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary-blue to-primary-purple p-px">
                <div className="bg-background/95 rounded-[3rem] py-16 px-8 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-text-main">
                        Private beta starts in January 2026
                    </h2>
                    <p className="text-xl text-text-muted mb-10 max-w-xl text-balance">
                        Join the waitlist to get the first invites and experience the future of recruitment search.
                    </p>
                    <Button size="lg" onClick={onJoinWaitlist}>
                        Join waitlist
                    </Button>
                </div>
            </div>
        </section>
    )
}

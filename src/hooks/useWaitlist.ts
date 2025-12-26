"use client"

import { useState } from 'react'

export const useWaitlist = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const submitEmail = async (email: string, who: string) => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch('https://app.karhuno.com/webhook/getready', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, who }),
            })

            if (response.ok) {
                setIsSuccess(true)
            } else {
                throw new Error('Failed to join waitlist')
            }
        } catch (err) {
            setError('Something went wrong. Please try again.')
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    return { submitEmail, isLoading, isSuccess, error }
}

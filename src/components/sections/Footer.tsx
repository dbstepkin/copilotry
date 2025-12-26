import React from 'react'

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-border/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded bg-primary-blue flex items-center justify-center font-mono font-bold text-white text-xs">
                            C
                        </div>
                        <span className="font-bold text-lg tracking-tight text-text-main font-mono">CoPilotry</span>
                    </div>
                    <p className="text-sm text-text-muted">High-precision partner search co-pilot.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-text-muted">
                    <a href="mailto:team@karhuno.com" className="hover:text-text-main transition-colors">team@karhuno.com</a>
                </div>

                <div className="text-sm text-text-muted">
                    © {new Date().getFullYear()} CoPilotry. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

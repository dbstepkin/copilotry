import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "CoPilotry | Find your perfect copilot with unparalleled precision",
    description: "Pick base filters. Add smart context. Get perfectly matching people with profile links. Save months of searching.",
    icons: {
        icon: "/favicon.svg",
    },
    alternates: {
        canonical: "https://www.copilotry.app/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        title: "CoPilotry",
        description: "Find your perfect copilot with unparalleled precision",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-84RNFXW2T9"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-84RNFXW2T9');
                    `}
                </Script>
                {children}
            </body>
        </html>
    );
}

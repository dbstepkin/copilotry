/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070A12",
        surface: "#0B1222",
        primary: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
        },
        accent: {
          cyan: "#22D3EE",
        },
        text: {
          main: "#E5E7EB",
          muted: "#94A3B8",
        },
        border: "#1F2A44",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'radar-sweep': 'radar-sweep 4s linear infinite',
      },
      keyframes: {
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

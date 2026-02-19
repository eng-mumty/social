/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'nexus-bg': '#0D1117',
                'nexus-card': 'rgba(22, 27, 34, 0.7)',
                'nexus-border': '#30363d',
                'nexus-blue': '#2563EB',
                'nexus-primary': '#2563EB',
                'nexus-accent': '#3B82F6', // Lighter blue for hovers
                'nexus-text': '#E6EDF3',
                'nexus-subtext': '#8B949E',
                'nexus-glass': 'rgba(22, 27, 34, 0.6)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}

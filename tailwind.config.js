/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Outfit"', 'sans-serif'],
            },
            colors: {
                teal: {
                    950: '#0F172A', // Midnight Navy (Darker for contrast)
                    900: '#1E293B',
                    800: '#334155',
                    700: '#475569',
                    600: '#64748B',
                },
                sage: {
                    50: '#F5F7FA', // Very light cool gray
                    100: '#E2E8F0',
                    200: '#CBD5E1',
                    300: '#94A3B8',
                    900: '#0F172A',
                },
                terracotta: {
                    // Now mapped to 'Gold/Bronze' as requested for premium feel
                    400: '#EAC575',
                    500: '#D4AF37', // Metallic Gold
                    600: '#B89628',
                },
                neutral: {
                    50: '#FAFAF9',
                    100: '#F5F5F4',
                    200: '#E7E5E4',
                    900: '#1C1917',
                }
            },
            backgroundImage: {
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 1.5s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                }
            }
        }
    },
    plugins: [],
}

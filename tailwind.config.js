/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          cyan:    '#06b6d4',
          purple:  '#a855f7',
          pink:    '#ec4899',
          gold:    '#f59e0b',
        },
        dark: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
      },
      fontFamily: {
        display: ['Syne', 'Inter', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':     'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 70%, #020617 100%)',
        'card-gradient':     'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.10) 100%)',
        'glow-gradient':     'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm':     '0 0 15px rgba(99,102,241,0.4)',
        'glow-md':     '0 0 30px rgba(99,102,241,0.5)',
        'glow-lg':     '0 0 60px rgba(99,102,241,0.4)',
        'glow-cyan':   '0 0 30px rgba(6,182,212,0.5)',
        'glow-purple': '0 0 30px rgba(168,85,247,0.5)',
        'card':        '0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
        'card-hover':  '0 35px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,102,241,0.3), 0 0 40px rgba(99,102,241,0.2)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 10s ease-in-out infinite',
        'float-fast':   'float 4s ease-in-out infinite',
        'pulse-glow':   'pulse-glow 3s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'gradient':     'gradient-shift 8s ease infinite',
        'slide-up':     'slide-up 0.6s ease-out',
        'fade-in':      'fade-in 0.8s ease-out',
        'shimmer':      'shimmer 2s infinite',
        'particle':     'particle 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(99,102,241,0.5)' },
          '50%':      { opacity: '0.8', boxShadow: '0 0 40px rgba(99,102,241,0.9)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        'slide-up': {
          '0%':   { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        particle: {
          '0%':   { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
        },
        surface: {
          light: '#F8FAFC',
          soft: '#F5F7FA',
          dark: '#0F0F0F',
          card: '#111111',
        },
        ink: {
          900: '#0B0F19',
          800: '#111827',
          gray: '#64748B',
          lightgray: '#94A3B8',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 4px 12px rgba(16, 24, 40, 0.04)',
        'card-hover':
          '0 2px 4px rgba(16, 24, 40, 0.05), 0 12px 32px rgba(16, 24, 40, 0.08)',
        'blue-glow': '0 8px 30px rgba(37, 99, 235, 0.18)',
      },
      maxWidth: {
        container: '72rem',
      },
      keyframes: {
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
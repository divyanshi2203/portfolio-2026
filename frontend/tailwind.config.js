/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          primary: '#E11D48',
          dark: '#BE123C',
          soft: '#FFE4E6',
          light: '#FFF1F2',
          deep: '#991B1B',
        },
        bg: {
          main: '#FFF7F8',
          section: '#FFF1F2',
          card: '#FFFFFF',
        },
        ink: {
          main: '#1F2937',
          secondary: '#4B5563',
          muted: '#6B7280',
        },
        border: {
          rose: '#FBCFE8',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(225, 29, 72, 0.15)',
        card: '0 12px 32px -12px rgba(190, 18, 60, 0.12)',
        glow: '0 0 0 1px rgba(225, 29, 72, 0.15), 0 20px 40px -16px rgba(190, 18, 60, 0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 45%, #FFFFFF 100%)',
        'btn-gradient':
          'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
        'card-hover':
          'linear-gradient(135deg, #FFFFFF 0%, #FFF1F2 100%)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

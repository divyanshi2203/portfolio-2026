/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#E11D48',
          primary: '#E11D48',
          deep: '#BE123C',
          wine: '#881337',
        },
        surface: {
          page: '#FFF8F9',
          soft: '#FFF1F2',
          card: '#FFFFFF',
        },
        ink: {
          main: '#191B23',
          secondary: '#505766',
          muted: '#737B8C',
        },
        line: {
          soft: '#FBCFD8',
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
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        // Restrained shadows, fewer glows.
        soft: '0 1px 2px rgba(25, 27, 35, 0.04), 0 8px 22px -16px rgba(136, 19, 55, 0.20)',
        card: '0 1px 3px rgba(25, 27, 35, 0.05), 0 14px 30px -20px rgba(136, 19, 55, 0.18)',
        lift: '0 2px 6px rgba(25, 27, 35, 0.06), 0 20px 36px -22px rgba(136, 19, 55, 0.26)',
      },
      backgroundImage: {
        // Subtle gradients only, reserved for hero and major CTAs.
        'hero-gradient':
          'linear-gradient(160deg, #FFF8F9 0%, #FFF1F2 55%, #FFFFFF 100%)',
        'btn-gradient': 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
        'wine-gradient': 'linear-gradient(135deg, #BE123C 0%, #881337 100%)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1628',
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CCFF',
          300: '#66B2FF',
          400: '#3399FF',
          500: '#0A1628',
          600: '#081220',
          700: '#060E18',
          800: '#040A10',
          900: '#020508'
        },
        accent: {
          blue: '#2563EB',
          purple: '#8B5CF6',
          green: '#10B981'
        },
        text: {
          primary: '#111827',
          light: '#F5F5F7'
        },
        dark: {
          100: '#0f0f23',
          200: '#1a1a2e',
          300: '#16213e',
          400: '#0f3460',
          500: '#0e4b99'
        }
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'heading': ['Space Grotesk', 'Poppins', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'gradient-shift': 'gradientShift 10s ease-in-out infinite',
        'border-rotate': 'borderRotate 3s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        gradientShift: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        borderRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      boxShadow: {
        'glow': '0 0 50px rgba(37, 99, 235, 0.3)',
        'glow-lg': '0 0 80px rgba(37, 99, 235, 0.4)',
        'soft': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'glass': '0 25px 50px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 2px 4px rgba(255, 255, 255, 0.1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e4b99 100%)'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

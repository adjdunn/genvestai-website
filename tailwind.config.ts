import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(220, 20%, 10%)',
        foreground: 'hsl(220, 20%, 95%)',
        card: {
          DEFAULT: 'hsl(220, 20%, 15%)',
          foreground: 'hsl(220, 20%, 95%)',
        },
        popover: {
          DEFAULT: 'hsl(220, 20%, 15%)',
          foreground: 'hsl(220, 20%, 95%)',
        },
        primary: {
          DEFAULT: 'hsl(210, 100%, 50%)',
          foreground: 'hsl(220, 20%, 95%)',
        },
        secondary: {
          DEFAULT: 'hsl(220, 20%, 20%)',
          foreground: 'hsl(210, 100%, 50%)',
        },
        muted: {
          DEFAULT: 'hsl(220, 20%, 25%)',
          foreground: 'hsl(220, 20%, 70%)',
        },
        accent: {
          DEFAULT: 'hsl(30, 100%, 50%)',
          foreground: 'hsl(220, 20%, 10%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84.2%, 60.2%)',
          foreground: 'hsl(220, 20%, 95%)',
        },
        border: 'hsl(220, 20%, 30%)',
        input: 'hsl(220, 20%, 30%)',
        ring: 'hsl(210, 100%, 50%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
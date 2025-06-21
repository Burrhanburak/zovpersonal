/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', 'Inter', 'system-ui', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'Inter', 'system-ui', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        cream: {
          DEFAULT: 'var(--cream)',
          light: 'var(--cream-light)', 
          dark: 'var(--cream-dark)'
        }
      },
    },
  },
  plugins: [],
}

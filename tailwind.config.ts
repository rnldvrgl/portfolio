import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        charcoal: 'var(--charcoal)',
        offwhite: 'var(--offwhite)',
        coral: 'var(--coral)',
        blue: 'var(--blue)',
        nude: 'var(--nude)',
        red: 'var(--red)',
        pinkdust: 'var(--pinkdust)',
        white: 'var(--white)',
        black: 'var(--black)',
        newRed: 'var(--new-red)',
        pink: 'var(--pink)',
        newPink: 'var(--new-pink)',
      },
    },
  },
  plugins: [],
} satisfies Config

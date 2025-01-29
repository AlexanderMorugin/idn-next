import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      xl: '1728px',
    },
    extend: {
      colors: {
        card: '#F0F0F0',
        'grey-light': '#CCCCCC',
        'grey-medium': '#D1D1D1',
        'grey-dark': '#E1E1E1',
        white: '#F3F3F3',
        purple: '#8977F3',
        'purple-light': '#A59DFF',
        black: '#121212',
      },
    },
  },
  plugins: [],
} satisfies Config;

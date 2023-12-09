import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  fontFamily: {
    CustomTitle: ['"Monocraft"','"Mabry Pro"','"Gotham Bold"','"Spline Sans"','"Helvetica Neue"','"Google Sans"','"Work Sans"','Arial','sans-serif'],
    CustomBody: ['"Iosevka Term Web"','"Victor Mono"','"Spline Sans Mono"','"Fira Mono"','"Fira Sans"','"JetBrains Mono"','"Helvetica Neue"','"Lexend Deca"','sans-serif']
    // href="https://fonts.googleapis.com/css?family=Spline+Sans|Work+Sans|Fira+Mono|Fira+Sans|Google+Sans|Lexend+Deca&display=swap"
  },
  plugins: [],
}
export default config

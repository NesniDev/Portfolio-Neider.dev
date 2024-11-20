/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

import animations from '@midudev/tailwind-animations'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Caviar: ['Caviar Dreams', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [animations]
}

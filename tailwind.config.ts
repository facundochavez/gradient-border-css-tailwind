import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      mask: {
        'gradient-mask': `linear-gradient(white, white) padding-box, linear-gradient(white, white)`,
      },
      maskComposite: {
        'mask-exclude': 'exclude',
      },
    },
    screens: {
      xs: '380px',
      sm: '450px',
      md: '750px',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;

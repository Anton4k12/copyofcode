/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        // heading: ["64px", "1.1em"],
        // "card-heading": ["52px", "1.1em"],
        heading: [
          "64px",
          {
            lineHeight: "1.1em",
            fontWeight: 600,
          },
        ],
        "card-heading": [
          "52px",
          {
            lineHeight: "1.1em",
            fontWeight: 600,
          },
        ],
        "card-description": ["18px", "1.4em"],
      },
      maxWidth: {
        1440: "1440px",
      },
    },
  },
  plugins: [],
};

// {'2xl': ['1.5rem', {
// 	lineHeight: '2rem',
// 	letterSpacing: '-0.01em',
// 	fontWeight: '500',}]

// postcss.config.mjs  (ESM — leave the .mjs extension)
export default {
  plugins: {
    // NEW in v4 – this loads Tailwind + LightningCSS for you
    '@tailwindcss/postcss': {},
  },
};
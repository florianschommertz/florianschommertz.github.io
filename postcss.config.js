// Updated for Tailwind CSS v4: the PostCSS plugin moved to '@tailwindcss/postcss'.
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  },
}

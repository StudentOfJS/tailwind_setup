const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in our project
  content: [
    './**/**/*.html',
    './**/**/*.vue',
    './**/**/*.js',
    './**/**/*.svelte',
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-import'),
    require('postcss-preset-env')({ stage: 1 }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};

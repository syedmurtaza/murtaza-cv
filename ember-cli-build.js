'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('postcss-import'), // Required for using @import with Tailwind
          require('autoprefixer'),
          ...(isProduction
            ? [
                require('@fullhuman/postcss-purgecss')({
                  content: ['./app/**/*.hbs', './app/**/*.js', './app/**/*.ts'],
                  defaultExtractor: (content) =>
                    content.match(/[\w-/:]+(?<!:)/g) || [],
                }),
              ]
            : []),
        ],
      },
    },
  });

  return app.toTree();
};

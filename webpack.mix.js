const path = require('path');
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
  })
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.esm.js',
        '~': path.resolve('resources/js')
      }
    }
  })
  .babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import']
  });

mix.copy('resources/assets/images', 'public/images', false);

mix.version();

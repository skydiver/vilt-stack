# vilt-stack
> Vue.js + Inertia.js + Laravel + Tailwind CSS

## Features
* Laravel 7
* Vue.js
* Inertia.js
* Tailwind CSS + Tailwind UI
* ESLint + Prettier
* Browsersync ready

## Install
1. clone repo
2. `composer install`
3. `npm install`
4. `cp .env.example .env`
5. `php artisan key:generate`

## Development
1. `npm run dev`
2. open http://localhost:3000/

## Notes
* Home component located at: `resources/js/pages/Home.vue`
* Use `resources/sass/custom.scss` for custom styles
* Images placed on `resources/assets/images` will be copied to `public/images`

## Credits
* Based on https://github.com/laravel-frontend-presets/inertiajs
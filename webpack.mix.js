let mix = require('laravel-mix');

mix.sass('resources/scss/main.css', 'public/css')
    .js('resources/js/main.js', 'public/js')
    .copy('resources/img', 'public/img')
    .options({
        processCssUrls: false,
        autoprefixer: {remove: false}
    });

mix.browserSync({
    proxy: 'https://serein.test/', // URL of your local website
    files: [
        '**/*.php',
        '**/*.js',
        '**/*.css'
    ]
});
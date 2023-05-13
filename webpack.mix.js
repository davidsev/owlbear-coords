let mix = require('laravel-mix');

mix.ts('src/index.ts', 'dist/app.js')
    .sourceMaps(false, 'source-map')
    .disableSuccessNotifications()
    .copy('static', 'dist')
    .options({
        terser: {
            terserOptions: {
                format: {
                    comments: false,
                },
                compress: {
                    drop_console: true
                }
            },
            extractComments: false,
        },
        clearConsole: false,
    });

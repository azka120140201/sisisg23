import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                plex: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
                inter: ['Inter', defaultTheme.fontFamily.sans]
            },
            colors: {
                oren: '#FF570A'
            },
            backgroundImage: {
                back: "url('./resources/js/Components/images/bg1.png')"
            },
            zIndex:  {
                'seribu': '1000',
                'duaribu': '2000'
            },
        },
    },

    plugins: [forms, require("daisyui"), ],
};

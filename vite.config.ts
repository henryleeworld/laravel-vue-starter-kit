import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import i18n from 'laravel-vue-i18n/vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import tailwindcss from 'tailwindcss';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        i18n(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
});

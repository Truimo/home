import adapter from '@sveltejs/adapter-vercel'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        alias: {
            '@/*': './src/*',
        },
        adapter: adapter(),
    },
}

export default config

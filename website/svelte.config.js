import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // Output folder for static site
            pages: 'build',
            assets: 'build',
            // SPA fallback so client-side routing still works on GitHub Pages
            fallback: 'index.html'
        }),
        prerender: {
            default: true
        }
    }
};

export default config;
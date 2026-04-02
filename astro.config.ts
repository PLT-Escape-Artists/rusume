import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    // #Todo add your domain name here, when you want to deploy
    // site: 'https://my-resume.rubens-super-cool-domain.com',
    adapter: node({
        mode: 'standalone',
    }),
});

// import adapter from '@sveltejs/adapter-auto';
import staticadapt from '@sveltejs/adapter-static'
// import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import path from 'path'
import rehypeSlug from 'rehype-slug'
// import autoprefixer from 'autoprefixer'


/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        blog: 'src/routes/blog/_post.svelte'
      },
      rehypePlugins: [
        rehypeSlug,
      ]
    }),
  ],
  extensions: ['.svelte', '.md'],
	kit: {
		// adapter: adapter(),
    adapter: staticadapt(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    vite: {
      resolve: {
        alias: {
          // these are the aliases and paths to them
          '@lib': path.resolve('./src/lib'),
          '@plasmid': path.resolve('./src/plasmid'),
          '@modules': path.resolve('./node_modules'),
        }
      }
    }
	},
};

export default config;


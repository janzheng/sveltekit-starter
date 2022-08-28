import adapter_auto from '@sveltejs/adapter-auto'
import adapter_static from '@sveltejs/adapter-static'
import adapter_vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import adapter_ipfs from 'sveltejs-adapter-ipfs'

import { mdsvex } from 'mdsvex'
import remarkAttr from 'remark-attr'
import rehypeSlug from 'rehype-slug'
// import autoprefixer from 'autoprefixer'

// import { plugin as markdown, Mode } from "vite-plugin-markdown";
// import preprocessMarkdoc from 'svelte-markdoc'
import markdocConfig from './markdoc.config.js'


import { config as dotenvconf } from "dotenv"
dotenvconf() 

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'], // adding .md here screws up vite meta glob import
  preprocess: [
    // preprocessMarkdoc(markdocConfig), // load usin api instead
    mdsvex({
      extensions: ['.svx'],
      layout: {
        blog: 'src/routes/blog/_post.svelte',
        content: 'src/lib/layouts/_content.svelte'
      },
      remarkPlugins: [
        remarkAttr,
      ],
      rehypePlugins: [
        rehypeSlug,
      ]
    }),
    preprocess({
      postcss: true,
    }),
  ],


  // vercel; regular deployment
  kit: {
    // adapter: adapter_auto(),
    adapter: adapter_vercel(),

    // used for static, to generate a bunch of pages
    // adapter: adapter_static(),
    prerender: {
      crawl: true,
      enabled: true,
      // pages: // generate an array of pages
      entries: [
        // "/blog/slug/one-one",
        // "/blog/slug/two-two",
        "*"
      ]
    },

    methodOverride: {
      parameter: '_method',
      allowed: ['POST', 'DELETE', 'PATCH']
    },

  },


  // ipfs, fleek; from Jolly Roger
  // kit: {
  //   adapter: adapter_ipfs({
  //     assets: './build',
  //     pages: './build',
  //     removeBuiltInServiceWorkerRegistration: true,
  //     injectPagesInServiceWorker: true,
  //     injectDebugConsole: true,
  //   }),
  //   target: '#svelte',
  //   trailingSlash: 'ignore',
  //   vite: {
  //     resolve: {
  //       alias: {
  //         // these are the aliases and paths to them
  //         '@lib': path.resolve('./src/lib'),
  //         // '$plasmid': path.resolve('./src/plasmid'), // local linked
  //         '$plasmid': path.resolve('./node_modules/plasmid'), // git linked
  //         '$modules': path.resolve('./node_modules'),
  //       }
  //     }
  //   }
  // },
};

export default config;


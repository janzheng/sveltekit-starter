
import path from 'path'
import { sveltekit } from "@sveltejs/kit/vite";
// import { plugin as markdown, Mode } from "vite-plugin-markdown";

import { config as dotenvconf } from "dotenv"
dotenvconf()

console.log('Use Local?:', process.env.PUBLIC_LOCAL)

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [
    // markdown(),
    // markdown({ mode: Mode.HTML }),
    sveltekit({
      extensions: ['.svelte'],
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: "@use \"src/app.scss\" as *;"
  //     }
  //   }
  // },
  resolve: {
    alias: {
      // these are the aliases and paths to them
      $routes: path.resolve('./src/routes'),
      '$plasmid': process.env.PUBLIC_LOCAL == 'local' ? path.resolve('./src/plasmid') : path.resolve('./node_modules/plasmid'), // dynamic linked
      // '$plasmid': path.resolve('./src/plasmid'), // local linked
      // $plasmid: path.resolve('./node_modules/plasmid'), // git linked
      $modules: path.resolve('./node_modules'),
    }
  },
};

export default config;

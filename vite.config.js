
import path from 'path'
import { sveltekit } from "@sveltejs/kit/vite";

console.log('Use Local?:', process.env.USE_LOCAL)

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [sveltekit()],
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
      // $lib: path.resolve('./src/lib'), // overridden by sveltekit
      // $routes: path.resolve('./src/routes'),
      // '$plasmid': process.env.USE_LOCAL == 'local' ? path.resolve('./src/plasmid') : path.resolve('./node_modules/plasmid'), // dynamic linked
      '$plasmid': path.resolve('./src/plasmid'), // local linked
      // $plasmid: path.resolve('./node_modules/plasmid'), // git linked
      $modules: path.resolve('./node_modules'),
    }
  },
};

export default config;

// Why do I need to write this import statement?
import * as fs from 'fs';

import { parse } from 'node-html-parser';

import checker from 'vite-plugin-checker';

process.env.BROWSER = 'C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome.exe';

export const fixHtmlHead = () => {
  // noinspection JSUnusedGlobalSymbols
  return {
    name: 'vite-plugin-fixHtmlHead',
    closeBundle: async () => {
      await (() => {
        const html = parse(fs.readFileSync('docs/index.html', {encoding: 'utf-8'}));

        html.querySelector('[src="/assets/index.js"]').removeAttribute('crossorigin').setAttribute('src', 'assets/index.js');
        html.querySelector('[href="/assets/style.css"]').setAttribute('blocking', 'render').setAttribute('href', 'assets/style.css');
        html.querySelector('[href="/monochromatic_icon_1-lightFg_darkBg.svg"]').setAttribute('href', 'monochromatic_icon_1-lightFg_darkBg.svg');

        fs.writeFileSync('docs/index.html', html.toString());
      })();
    }
  };
};

// noinspection JSUnusedGlobalSymbols
export default ({
  //region Shared Options
  root: 'src',
  css: {
    preprocessorOptions: {
      scss: {
        OutputStyle: 'expanded',
      },
    },
  },
  esbuild: {
    minifyIdentifiers: false,
    minifySyntax: false,
  },
  clearScreen: false,
  //endregion

  //region Server Options
  server: {
    host: true,
    strictPort: true,
    open: 'index.html',
    fs: {
      strict: false,
      allow: [
        'index.html',
        'M/index.css',
        'M/index.mjs',
      ]
    }
  },
  //endregion

  //region Build Options
  build: {
    target: 'esnext',
    modulePreload: false,
    // For GitHub pages "classic experience".
    emptyOutDir: false,
    outDir: '../docs',
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  //endregion

  //region Preview Options
  preview: {
    host: true,
    strictPort: true,
    open: 'index.html',

  },
  //endregion

  //region Dep Optimization Options
  optimizeDeps: {
    entries: [
      'index.html'
    ],
    force: true,
  },
  //endregion

  //region Plugins
  plugins: [
    {
      ...checker({
        stylelint: {
          lintCommand: 'stylelint ./M/**/*.scss --allowEmptyInput --config ../.stylelintrc.json --fix',
        }
                 }),
      enforce: 'post',
    },
    {
      ...fixHtmlHead(),
      enforce: 'post',
      apply: 'build',
    }
  ]
  //endregion
});

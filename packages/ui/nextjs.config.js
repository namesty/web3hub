// See here for help
// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// Specify separate paths
const path = require('path');
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    // MONACO EDITOR RULES
    config.module.rules.push({
      test: /\.css$/,
      include: APP_DIR,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          namedExport: true,
        },
      }],
    }, {
      test: /\.css$/,
      include: MONACO_DIR,
      use: ['style-loader', 'css-loader'],
    })

    // MONACO EDITOR PLUGIN
    config.plugins.push(
      new MonacoWebpackPlugin({
        // available options are documented at 
        // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ['graphql']
      })
    )

    // Important: return the modified config
    return config
  },
}
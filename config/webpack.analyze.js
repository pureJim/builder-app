const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { default: merge } = require('webpack-merge');

const config = require('./webpack.config');

const webpackConfig = merge(config, {
  plugins: [new BundleAnalyzerPlugin()],
});
const cssPluginIndex = webpackConfig.plugins.findIndex((e) => e.constructor.name === 'MiniCssExtractPlugin');
const cssPlugin = webpackConfig.plugins[cssPluginIndex];
const configToExport = webpackConfig;
configToExport.plugins[cssPluginIndex] = cssPlugin;
module.exports = configToExport;

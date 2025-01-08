const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const DOT_ENV = IS_PRODUCTION ? '.env.production' : '.env.development';

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    clean: true,
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    host: '0.0.0.0',
    port: 8000,
    hot: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://0.0.0.0:5000/api/v1',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    ],
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    [
                      '@babel/preset-react',
                      {
                        runtime: 'automatic',
                      },
                    ],
                    '@babel/preset-typescript',
                  ],
                  cacheDirectory: true,
                  cacheCompression: false,
                  plugins: [!IS_PRODUCTION && 'react-refresh/babel', '@babel/plugin-transform-runtime'].filter(Boolean),
                },
              },
            ],
          },
          {
            test: /\.(css|less)$/,
            exclude: /\.module\.css$/,
            use: [
              IS_PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env'],
                  },
                },
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                  },
                },
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: path.resolve(__dirname, '../src/style/variables.less'),
                },
              },
            ],
          },
          {
            test: /\.module\.(css|less)$/,
            use: [
              IS_PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]__[hash:base64:5]',
                  },
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env'],
                  },
                },
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                  },
                },
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: path.resolve(__dirname, '../src/style/variables.less'),
                },
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|webp|ico)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 8 * 1024,
              },
            },
            generator: {
              filename: 'image/[name].[hash:8][ext]',
            },
          },
          {
            test: /\.svg$/i,
            use: ['@svgr/webpack', 'url-loader'],
          },
          {
            test: /\.(woff2?|eot|ttf|otf|mp3|mp4|avi|mkv)$/,
            type: 'asset/resource',
            generator: {
              filename: 'media/[name].[hash:8][ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', DOT_ENV),
    }),
    !IS_PRODUCTION && new ReactRefreshWebpackPlugin(),
    IS_PRODUCTION &&
      new MiniCssExtractPlugin({
        filename: 'style/[name].[contenthash:8].css',
        chunkFilename: 'style/[name].[contenthash:8].chunk.css',
      }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../build'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new WebpackBar(),
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
      cache: true,
    }),
    IS_PRODUCTION &&
      new CompressionPlugin({
        test: /\.(js|css)$/,
        algorithm: 'gzip', // 使用gzip压缩
        threshold: 10240, // 对超过10k的数据进行压缩
        minRatio: 0.8, // 压缩比达到0.8时才会被压缩
      }),
  ].filter(Boolean),
  ...(IS_PRODUCTION && {
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: false,
        cacheGroups: {
          'frame-lib': {
            name: 'frame-lib',
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-router)[\\/]/,
            priority: 10,
            chunks: 'all',
          },
          'ui-lib': {
            name: 'ui-lib',
            test: /[\\/]node_modules[\\/](antd|@ant-design|@mui\/material)[\\/]/,
            priority: 9,
            chunks: 'all',
          },
          charts: {
            name: 'charts',
            test: /[\\/]node_modules[\\/](echarts|echarts-gl)[\\/]/,
          },
          common: {
            name: 'commons',
            minChunks: 2,
            priority: -20,
            chunks: 'all',
          },
        },
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
      minimize: IS_PRODUCTION,
      minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()],
    },
  }),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  // devtool: IS_PRODUCTION ? false : 'eval-cheap-module-source-map', // 大小优化平衡后的source
  devtool: IS_PRODUCTION ? false : 'source-map', // 完整追踪
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

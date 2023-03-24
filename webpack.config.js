// webpack.config.js

module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.(gltf|glb)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // in bytes
                name: '[name].[hash:8].[ext]',
                outputPath: 'models',
                publicPath: '/models',
              },
            },
          ],
        },
      ],
    },
  };
  
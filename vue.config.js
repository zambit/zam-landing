module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('svg-sprite-loader');

    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .end();
  },
};

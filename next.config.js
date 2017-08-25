module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/blog/test-typography-1': {
        page: '/post',
        query: { id: 'test-typography-1' }
      }
    }
  },
  // Performs customizations to webpack config
  webpack: (config, { dev }) => {
    if (dev) {
      // Adds ESLint support
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      })
    }
    return config
  }
}

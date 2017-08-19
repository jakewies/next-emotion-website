module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/blog/hello-nextjs': {
        page: '/post',
        query: { id: 'hello-nextjs' }
      },
      '/blog/learn-nextjs': {
        page: '/post',
        query: { id: 'learn-nextjs' }
      },
      '/blog/deploy-nextjs': {
        page: '/post',
        query: { id: 'deploy-nextjs' }
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

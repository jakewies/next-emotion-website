module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/blog/hello-nextjs': {
        page: '/post',
        query: { title: 'Hello Next.js' }
      },
      '/blog/learn-nextjs': {
        page: '/post',
        query: { title: 'Learn Next.js is awesome' }
      },
      '/blog/deploy-nextjs': {
        page: '/post',
        query: { title: 'Deploy apps with Zeit' }
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

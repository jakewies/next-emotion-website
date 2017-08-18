module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } },
      '/p/learn-nextjs': {
        page: '/post',
        query: { title: 'Learn Next.js is awesome' }
      },
      '/p/deploy-nextjs': {
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

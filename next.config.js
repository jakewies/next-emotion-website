module.exports = {
  async exportPathMap() {
    const { fileMap: posts } = await require('./src/posts/index.json')

    const postPages = Object.keys(posts)
      .map(key => posts[key].base.slice(0, -5))
      .reduce(
        (posts, post) =>
          Object.assign({}, posts, {
            [`/blog/${post}`]: { page: '/post', query: { id: post } }
          }),
        {}
      )

    // base pages
    const pages = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' }
    }

    return Object.assign({}, postPages, pages)
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

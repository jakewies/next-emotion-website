import PropTypes from 'prop-types'
import Layout from '../src/components/page/layout'
import Posts from '../src/components/blog/posts'
import { getPosts } from '../src/utils'

const Blog = ({ posts }) =>
  <Layout title="Blog">
    <h1>Blog</h1>
    <Posts posts={posts} />
  </Layout>

Blog.getInitialProps = () => ({ posts: getPosts() })

Blog.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Blog

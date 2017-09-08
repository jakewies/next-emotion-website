import PropTypes from 'prop-types'
import Page from '../src/components/page'
import PostList from '../src/components/blog/postList'
import { getPosts } from '../src/utils'

const Blog = ({ posts }) =>
  <Page title="Blog">
    <h1>Blog</h1>
    <PostList posts={posts} />
  </Page>

Blog.getInitialProps = () => ({ posts: getPosts() })

Blog.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Blog

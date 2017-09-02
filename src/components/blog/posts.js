import PropTypes from 'prop-types'
import PostLink from './postLink'
import { formatPostId } from '../../utils'

const Posts = ({ posts }) =>
  <ul>
    {posts.map((post, i) =>
      <PostLink title={post.title} id={formatPostId(post.base)} key={i} />
    )}
  </ul>

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts

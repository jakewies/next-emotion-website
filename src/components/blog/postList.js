import PropTypes from 'prop-types'
import PostLink from './postLink'
import { formatPostId } from '../../utils'

const PostList = ({ posts }) =>
  <ul>
    {posts.map((post, i) =>
      <PostLink title={post.title} id={formatPostId(post.base)} key={i} />
    )}
  </ul>

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList

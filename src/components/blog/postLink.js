import PropTypes from 'prop-types'
import Link from 'next/link'

const PostLink = ({ id, title }) =>
  <li>
    <Link as={`/blog/${id}`} href={`/post?id=${id}`}>
      <a>
        {title}
      </a>
    </Link>
  </li>

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default PostLink

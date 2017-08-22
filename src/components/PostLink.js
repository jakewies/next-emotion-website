import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const PostLink = props =>
  <li>
    <Link as={`/blog/${props.id}`} href={`/post?id=${props.id}`}>
      <a>
        {props.title}
      </a>
    </Link>
  </li>

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default PostLink

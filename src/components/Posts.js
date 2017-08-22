import React from 'react'
import PostLink from './PostLink'
import { getPosts, formatPostId } from '../utils'
import ARCHIVE from '../../posts/index.json'

export default function Posts() {
  const posts = getPosts(ARCHIVE)
  return (
    <ul>
      {posts.map((post, i) =>
        <PostLink title={post.title} id={formatPostId(post.base)} key={i} />
      )}
    </ul>
  )
}

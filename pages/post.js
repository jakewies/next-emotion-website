import React from 'react'
import Layout from '../components/Layout'
import { posts } from '../posts.json'

/* eslint react/prop-types: 0 */

const Post = props =>
  <Layout>
    <h1>
      {props.post.title}
    </h1>
    <p>
      {props.post.content}
    </p>
  </Layout>

Post.getInitialProps = async function({ query }) {
  const post = posts.find(post => post.id === query.id)
  return { post }
}

export default Post

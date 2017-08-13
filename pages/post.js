import React from 'react'
import Layout from '../components/Layout'

/* eslint react/prop-types: 0 */

const Post = props =>
  <Layout>
    <h1>
      {props.url.query.title}
    </h1>
    <p>This is the blog post content.</p>
  </Layout>

export default Post

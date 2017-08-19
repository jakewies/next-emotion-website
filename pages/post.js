import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'

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

Post.getInitialProps = async function({ req, query }) {
  // If server, req will be defined
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const res = await axios.get(`${baseUrl}/api/posts/${query.id}`)
  return { post: res.data }
}

export default Post

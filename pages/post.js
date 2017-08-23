import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../src/components/Layout'
import { getPost } from '../src/utils'

const Post = props =>
  <Layout title={props.title}>
    <h1>
      {props.title}
    </h1>
    <div dangerouslySetInnerHTML={{ __html: props.content }} />
  </Layout>

Post.getInitialProps = ({ query }) => {
  return getPost(query.id)
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post

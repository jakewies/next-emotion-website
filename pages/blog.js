import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import axios from 'axios'

const PostLink = props =>
  <li>
    <Link as={`/blog/${props.id}`} href={`/post?id=${props.id}`}>
      <a>
        {props.title}
      </a>
    </Link>
  </li>

const Index = props =>
  <Layout>
    <h1>Blog</h1>
    <ul>
      {Object.keys(props.posts).map(id =>
        <PostLink key={id} id={id} title={props.posts[id].title} />
      )}
    </ul>
  </Layout>

Index.getInitialProps = async function({ req }) {
  // If server, req will be defined
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const res = await axios.get(`${baseUrl}/api/posts`)
  return { posts: res.data }
}

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

Index.propTypes = {
  posts: PropTypes.object.isRequired
}

export default Index

import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Link from 'next/link'
import { posts } from '../posts.json'

const PostLink = props =>
  <li>
    <Link as={`/blog/${props.id}`} href={`/post?id=${props.id}`}>
      <a>
        {props.title}
      </a>
    </Link>
  </li>

const Index = () =>
  <Layout>
    <h1>Blog</h1>
    <ul>
      {posts.map(post =>
        <PostLink key={post.id} id={post.id} title={post.title} />
      )}
    </ul>
  </Layout>

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Index

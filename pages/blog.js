import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}

const PostLink = props =>
  <li>
    <Link as={`/blog/${props.id}`} href={`/post?title=${props.title}`}>
      <a>
        {props.title}
      </a>
    </Link>
  </li>

const Index = () =>
  <Layout>
    <h1>Blog</h1>
    <ul>
      {getPosts().map(post =>
        <PostLink key={post.id} id={post.id} title={post.title} />
      )}
    </ul>
  </Layout>

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Index

import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = props =>
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>
        {props.title}
      </a>
    </Link>
  </li>

const Index = () =>
  <Layout>
    <h1>Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Tits" />
    </ul>
  </Layout>

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Index

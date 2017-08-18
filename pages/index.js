import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import styled from 'emotion/react'

const fontFamily = css`
  font-family: 'Arial';
`

const Anchor = styled.a`
  composes: ${fontFamily};
  text-decoration: none;
  color: blue;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`

const List = styled.ul`padding: 0;`

const Item = styled.li`
  list-style: none;
  margin: 5px 0;
`

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}

const PostLink = props =>
  <Item>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <Anchor>
        {props.title}
      </Anchor>
    </Link>
  </Item>

const Index = () =>
  <Layout>
    <h1 className={fontFamily}>My Blog</h1>
    <List>
      {getPosts().map(post =>
        <PostLink key={post.id} id={post.id} title={post.title} />
      )}
    </List>
  </Layout>

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Index

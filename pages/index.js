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
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeittt" />
    </List>
  </Layout>

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Index

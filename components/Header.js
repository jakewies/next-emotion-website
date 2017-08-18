import React from 'react'
import Link from 'next/link'
import styled from 'emotion/react'

const Anchor = styled.a`
  margin-right: 15px;
  text-decoration: none;
  color: #3b47ef;
  cursor: pointer;
`

const Header = () =>
  <div>
    <Link href="/">
      <Anchor>Home</Anchor>
    </Link>
    <Link href="/blog">
      <Anchor>Blog</Anchor>
    </Link>
    <Link href="/about">
      <Anchor>About</Anchor>
    </Link>
  </div>

export default Header

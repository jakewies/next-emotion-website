import Link from 'next/link'
import styled from 'styled-components'

const NavContainer = styled.div`
  background-color: #f7fff7;
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledNav = styled.nav`
  width: 50%;
  display: flex;
  flex-direction: column;

  a {
    color: #301c6d;
    font-family: system-ui;
    margin-bottom: 1.5rem;
    text-align: right;
    text-decoration: none;
  }
`

const Nav = () =>
  <NavContainer>
    <StyledNav>
      <Link prefetch href="/">
        <a>about</a>
      </Link>
      <Link prefetch href="/blog">
        <a>blog</a>
      </Link>
      <Link prefetch href="/work">
        <a>work</a>
      </Link>
    </StyledNav>
  </NavContainer>

export default Nav

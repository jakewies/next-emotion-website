import ActiveLink from './activeLink'
import styled from 'styled-components'

const NavContainer = styled.div`
  background-color: #f7fff7;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  @media (min-width: 768px) {
    width: 200px;
    opacity: 1;
  }

  @media (min-width: 992px) {
    width: 300px;
  }
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
      <ActiveLink href="/">about</ActiveLink>
      <ActiveLink href="/blog">blog</ActiveLink>
      <ActiveLink href="/work">work</ActiveLink>
    </StyledNav>
  </NavContainer>

export default Nav

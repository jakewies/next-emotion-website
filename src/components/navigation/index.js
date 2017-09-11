import styled from 'react-emotion'
import PropTypes from 'prop-types'
import NavLink from './navLink'

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

  @media (min-width: 768px) {
    width: 200px;
  }

  @media (min-width: 992px) {
    width: 300px;
  }
`

const StyledNav = styled.nav`
  width: 50%;
  display: flex;
  flex-direction: column;

  & a {
    color: #301c6d;
    font-family: system-ui;
    margin-bottom: 1.5rem;
    text-align: right;
    text-decoration: none;
  }
`

const Nav = ({ mobileMenuActive }) =>
  <NavContainer toggleMobileMenu={mobileMenuActive}>
    <StyledNav>
      <NavLink href="/">about</NavLink>
      <NavLink href="/blog">blog</NavLink>
      <NavLink href="/work">work</NavLink>
    </StyledNav>
  </NavContainer>

Nav.propTypes = {
  mobileMenuActive: PropTypes.bool.isRequired
}

export default Nav

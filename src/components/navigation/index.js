import styled from 'react-emotion'
import PropTypes from 'prop-types'
import NavLink from './navLink'

const NavContainer = styled.div`
  display: ${props => (props.showMobileMenu ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: #f7fff7;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  @media (min-width: 768px) {
    display: flex;
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
    margin-bottom: 1.5rem;
    text-align: right;
    text-decoration: none;
  }
`

const Nav = ({ showMobileMenu }) =>
  <NavContainer showMobileMenu={showMobileMenu}>
    <StyledNav>
      <NavLink href="/">about</NavLink>
      <NavLink href="/blog">blog</NavLink>
      <NavLink href="/work">work</NavLink>
    </StyledNav>
  </NavContainer>

Nav.propTypes = {
  showMobileMenu: PropTypes.bool.isRequired
}

export default Nav

import React from 'react'
import styled from 'react-emotion'
import Burger from './burger'
import NavLink from './navLink'

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7fff7;
  height: ${props => (props.showMobileMenu ? '100%' : '0')};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    height: 100%;
    width: 200px;
  }

  @media (min-width: 992px) {
    width: 300px;
  }
`

const NavLinks = styled.nav`
  width: 50%;
  display: ${props => (props.showMobileMenu ? 'flex' : 'none')};
  flex-direction: column;

  & a {
    color: #301c6d;
    margin-bottom: 1.5rem;
    text-align: right;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMobileMenu: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu(e) {
    e.stopPropagation()
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu
    }))
  }

  render() {
    return (
      <NavContainer testies={true} showMobileMenu={this.state.showMobileMenu}>
        <Burger handleClick={this.toggleMobileMenu} />
        <NavLinks showMobileMenu={this.state.showMobileMenu}>
          <NavLink href="/">about</NavLink>
          <NavLink href="/blog">blog</NavLink>
          <NavLink href="/work">work</NavLink>
        </NavLinks>
      </NavContainer>
    )
  }
}

export default Nav

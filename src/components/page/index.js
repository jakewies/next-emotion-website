import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import Meta from './meta'
import Nav from '../navigation'

injectGlobal`
  html {
    font-size: 100%;
    -webkit-font-smoothing: antialiased;

    @media (min-width: 800px) {
      font-size: 112.5%;
    }
    
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
// this shouldn't be a solution
// shouldn't have to manage layout here and in navigation.js
// should only need to manage it in one place
const Main = styled.main`
  background: #f7fff7;
  min-height: 100vh;
  @media (min-width: 768px) {
    margin-left: 200px;
  }

  @media (min-width: 992px) {
    margin-left: 300px;
  }
`

const Burger = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ce63c1;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenuActive: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu(e) {
    e.stopPropagation()
    this.setState(prevState => ({
      mobileMenuActive: !prevState.mobileMenuActive
    }))
  }

  render() {
    return (
      <div>
        <Meta title={this.props.title} />
        <Burger onClick={this.toggleMobileMenu}>menu</Burger>
        <Nav mobileMenuActive={this.state.mobileMenuActive} />
        <Main>
          {this.props.children}
        </Main>
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
}

export default Page

import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props =>
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>

Layout.propTypes = {
  children: PropTypes.array.isRequired
}

export default Layout

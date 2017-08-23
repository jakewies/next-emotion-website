import React from 'react'
import PropTypes from 'prop-types'
import Meta from './Meta'
import Header from './Header'

const Layout = props =>
  <div>
    <Meta title={props.title} />
    <Header />
    {props.children}
  </div>

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout

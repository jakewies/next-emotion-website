import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Meta = props =>
  <Head>
    <title>
      {props.title}
    </title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="utf-8" />
  </Head>

Meta.propTypes = {
  title: PropTypes.string.isRequired
}

export default Meta

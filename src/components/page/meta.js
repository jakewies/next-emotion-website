import PropTypes from 'prop-types'
import Head from 'next/head'
import { headings, content } from '../../../typography_config'

const Meta = ({ title }) =>
  <Head>
    <title>
      {title}
    </title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="utf-8" />
    <link
      href={`https://fonts.googleapis.com/css?family=${headings}:300,400,500,700|${content}:300,400,700`}
      rel="stylesheet"
    />
    {/* <link
      href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500|Source+Sans+Pro:300,300i,400"
      rel="stylesheet"
    /> */}
  </Head>

Meta.propTypes = {
  title: PropTypes.string.isRequired
}

export default Meta

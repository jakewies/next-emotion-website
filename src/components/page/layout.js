import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import Meta from './meta'
import Nav from './navigation'

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

const Main = styled.main`margin-left: 300px;`

const Layout = ({ title, children }) =>
  <div>
    <Meta title={title} />
    <Nav />
    <Main>
      {children}
    </Main>
  </div>

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout

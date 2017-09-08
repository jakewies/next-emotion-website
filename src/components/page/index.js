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
// this shouldn't be a solution
// shouldn't have to manage layout here and in navigation.js
// should only need to manage it in one place
const Main = styled.main`
  @media (min-width: 768px) {
    margin-left: 200px;
  }

  @media (min-width: 992px) {
    margin-left: 300px;
  }
`

const Page = ({ title, children }) =>
  <div>
    <Meta title={title} />
    <Nav />
    <Main>
      {children}
    </Main>
  </div>

Page.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
}

export default Page

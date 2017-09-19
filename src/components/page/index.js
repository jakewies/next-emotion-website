import PropTypes from 'prop-types'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import Meta from './meta'
import Nav from '../navigation'

injectGlobal`
  html {
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
  background: #f7fff7;

  @media (min-width: 768px) {
    margin-left: 200px;
  }

  @media (min-width: 992px) {
    margin-left: 300px;
  }
`
const Page = ({ title, children, mobileNavBg }) =>
  <div>
    <Meta title={title} />
    <Nav mobileBg={mobileNavBg || 'transparent'} />
    <Main>
      {children}
    </Main>
  </div>

Page.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  mobileNavBg: PropTypes.string
}

export default Page

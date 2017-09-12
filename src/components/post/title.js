import styled from 'react-emotion'
import { scale } from '../../utils/typography'

const Title = styled.h1`
  font-size: calc(1.65 * ${scale} * 1rem);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  letter-spacing: -1px;
  -webkit-font-smoothing: antialiased;
  color: #333;
`

export default Title

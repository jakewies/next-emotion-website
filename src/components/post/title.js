import styled from 'styled-components'
import { headings } from '../../../typography_config'

const Title = styled.h1`
  --scale: 1.618;
  font-weight: 500;
  font-size: calc(1.65 * var(--scale) * 1rem);
  font-family: ${headings}, monospace;
`

export default Title

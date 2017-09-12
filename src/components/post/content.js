import styled from 'react-emotion'
import { lineHeight, scale } from '../../utils/typography'

const Content = styled.section`
  color: #333;

  /* Blog post typography base */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  & h2,
  & h3,
  & h4 {
    font-weight: 500;
    margin-top: calc(${lineHeight} * 1rem);
    margin-bottom: 0;
    line-height: calc(${lineHeight} * 1rem);
  }

  & h2 {
    font-size: calc(1.25 * ${scale} * 1rem);
    line-height: calc(1.25 * calc(${lineHeight} * 1rem););
    margin-top: calc(1.25 * calc(${lineHeight} * 1rem););
  }
  & h3 {
    font-size: calc(1 * ${scale} * 1rem);
  }
  & h4 {
    font-size: calc(${scale} / 1.25 * 1rem);
  }

  & p {
    font-size: 1.11rem;
    line-height: calc(${lineHeight} * 1rem);
    margin-top: calc(${lineHeight} * 1rem);
    margin-bottom: 0;
    font-weight: 300;
  }

  & a {
    color: fuchsia;
  }

  & ul,
  & ol {
    margin-top: calc(${lineHeight} * 1rem);
    margin-bottom: calc(${lineHeight} * 1rem);
  }

  & ul li,
  & ol li {
    line-height: calc(${lineHeight} * 1rem);
  }

  & ul ul,
  & ol ul,
  & ul ol,
  & ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  & blockquote {
    line-height: calc(${lineHeight} * 1rem);
    margin-top: calc(${lineHeight} * 1rem);
    margin-bottom: calc(${lineHeight} * 1rem);
    width: 90%;
    margin: 0 auto;
    font-style: italic;
    color: #777;
  }

  & pre {
    display: block;
    width: 100%;
    padding: 20px;
    border: 1px solid #eee;
    color: fuchsia;
    border-radius: 5px;
    vertical-align: bottom;
    overflow: scroll;
    font-family: menlo, monospace;
    margin-top: calc(${lineHeight} * 1rem);
  }

  & code {
    color: fuchsia;
    border: 1px solid #eee;
    background: #f7f7f7;
    padding: 3px;
    font-size: 1rem;
  }

  & pre > code {
    margin: 0;
    border: 0;
    padding: 0;
    background: none;
    font-size: 1rem;
  }
`

export default Content

import styled from 'styled-components'

const Content = styled.section`
  --base-line-height: 1.7;
  --leading: calc(var(--base-line-height) * 1rem);
  --scale: 1.618;
  color: #333;

  /* Blog post typography base */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  h2,
  h3,
  h4 {
    font-weight: 500;
    margin-top: var(--leading);
    margin-bottom: 0;
    line-height: var(--leading);
  }

  h2 {
    font-size: calc(1.25 * var(--scale) * 1rem);
    line-height: calc(1.25 * var(--leading));
    margin-top: calc(1.25 * var(--leading));
  }
  h3 {
    font-size: calc(1 * var(--scale) * 1rem);
  }
  h4 {
    font-size: calc(var(--scale) / 1.25 * 1rem);
  }

  p {
    font-size: 1.11rem;
    line-height: var(--leading);
    margin-top: var(--leading);
    margin-bottom: 0;
    font-weight: 300;
  }

  a {
    color: fuchsia;
  }

  ul,
  ol {
    margin-top: var(--leading);
    margin-bottom: var(--leading);
  }

  ul li,
  ol li {
    line-height: var(--leading);
  }

  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  blockquote {
    line-height: var(--leading);
    margin-top: var(--leading);
    margin-bottom: var(--leading);
    width: 90%;
    margin: 0 auto;
    font-style: italic;
    color: #777;
  }

  pre {
    display: block;
    width: 100%;
    padding: 20px;
    border: 1px solid #eee;
    color: fuchsia;
    border-radius: 5px;
    vertical-align: bottom;
    overflow: scroll;
    font-family: menlo, monospace;
    margin-top: var(--leading);
  }

  code {
    color: fuchsia;
    border: 1px solid #eee;
    background: #f7f7f7;
    padding: 3px;
    font-size: 1rem;
  }

  pre > code {
    margin: 0;
    border: 0;
    padding: 0;
    background: none;
    font-size: 1rem;
  }
`

export default Content

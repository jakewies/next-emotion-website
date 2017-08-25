import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from '../src/components/page/layout'
import Content from '../src/components/blog/post-content'
import { getPost } from '../src/utils'

import { headings } from '../typography_config'

const Article = styled.article`
  padding: 0 20px;
  margin: 5rem auto 0;
  max-width: 34rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`

const Title = styled.h1`
  --scale: 1.618;
  font-weight: 500;
  font-size: calc(1.65 * var(--scale) * 1rem);
  font-family: ${headings}, monospace;
`

const Time = styled.time`
  display: inline-block;
  font-family: 'Roboto Mono', menlo, monospace;
  font-size: 0.8rem;
  font-weight: 300;
  color: #777;
  padding-left: 5px;
`

const Post = props =>
  <Layout title={props.title}>
    <Article>
      <header>
        <Title>
          {props.title}
        </Title>
        <Time>
          {props.date}
        </Time>
      </header>
      <Content dangerouslySetInnerHTML={{ __html: props.content }} />
    </Article>
  </Layout>

Post.getInitialProps = ({ query }) => {
  return getPost(query.id)
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post

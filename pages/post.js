import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from '../src/components/page/layout'
import Header from '../src/components/post/header'
import Content from '../src/components/post/content'
import { format } from 'date-fns'

const Article = styled.article`
  padding: 0 20px;
  margin: 5rem auto 0;
  max-width: 34rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`

const Post = ({ title, date, content }) =>
  <Layout title={title}>
    <Article>
      <Header title={title} date={date} />
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  </Layout>

Post.getInitialProps = async ({ query }) => {
  const post = await require(`../posts/${query.id}.json`)
  return {
    title: post.title,
    date: format(post.date, 'MM.DD.YY'),
    content: post.bodyHtml
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post

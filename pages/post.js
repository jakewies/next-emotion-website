import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Page from '../src/components/page'
import Header from '../src/components/post/header'
import Content from '../src/components/post/content'
import { format } from 'date-fns'

const Article = styled.article`
  padding: 5rem 1.2rem;
  margin: 0 auto;
  max-width: 34rem;
`

const Post = ({ title, date, content }) =>
  <Page title={title}>
    <Article>
      <Header title={title} date={date} />
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  </Page>

Post.getInitialProps = async ({ query }) => {
  const post = await require(`../posts/${query.id}.json`)
  console.log(post)
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

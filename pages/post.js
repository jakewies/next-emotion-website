import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Page from '../src/components/page'
import PageInner from '../src/components/page/pageInner'
import Header from '../src/components/post/header'
import Content from '../src/components/post/content'
import { format } from 'date-fns'

const Article = styled.article`
  margin: 0 auto;
  max-width: 34rem;
`

const Post = ({ title, date, content }) =>
  <Page title={title} mobileNavBg={'#f7fff7'}>
    <PageInner>
      <Article>
        <Header title={title} date={date} />
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </Article>
    </PageInner>
  </Page>

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

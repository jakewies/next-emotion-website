---
title: Testing Typography For The Modern Age
date: 2017-07-23
---

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

## Heading 2

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.
Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

### Heading 3

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

` Code block whatchu know `

> Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

```
import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../src/components/page/layout'
import { getPost } from '../src/utils'

const Post = props =>
  <Layout title={props.title}>
    <h1>
      {props.title}
    </h1>
    <div dangerouslySetInnerHTML={{ __html: props.content }} />
  </Layout>

Post.getInitialProps = ({ query }) => {
  return getPost(query.id)
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post
```

## Heading 2 

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.
Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

## Heading 2 

Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.
Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.
Amet cillum eiusmod ea nostrud pariatur veniam irure. Culpa ipsum mollit velit ea duis ipsum. Sunt esse quis ad deserunt. Nisi do ut eu sunt ea. Deserunt ipsum mollit do consectetur reprehenderit laborum amet laborum officia ea dolor et cupidatat.

## Heading 2
### Heading 3
#### Heading 4

Irure laboris voluptate culpa reprehenderit do velit non. Ad aliquip velit exercitation ad sunt deserunt nisi officia et proident. Veniam amet id sint aute incididunt in. Eu eiusmod do eu nisi ex duis dolor. Quis eu enim minim aliquip eiusmod incididunt consectetur eiusmod. Ipsum aliqua Lorem dolor excepteur culpa proident consequat do voluptate eiusmod amet adipisicing. In labore nulla commodo ipsum excepteur do amet incididunt.


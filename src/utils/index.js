/*
 * @param {object}  archive - A JSON object summarizing a list of posts
 * @returns {array}         - Of individual post objects, sorted by date
 * ---
 * Taken from https://github.com/tscanlin/next-blog, thanks for the inspiration Tim!
 */

export function getPosts(archive) {
  return (
    archive &&
    archive.fileMap &&
    Object.keys(archive.fileMap)
      .filter(file => {
        if (file.indexOf('posts/json') === 0) {
          return true
        }
      })
      .map(file => archive.fileMap[file])
      .sort((a, b) => {
        const aDate = Date.parse(a.date)
        const bDate = Date.parse(b.date)
        return bDate > aDate ? 1 : bDate < aDate ? -1 : 0
      })
  )
}

/*
 * @param {string}  id - A string representing a post's '.json' filename, located at ./posts/json/< id >.json
 * @returns {array}    - An object containing a post's title and html content
 */

export function getPost(id) {
  const post = require(`../../posts/json/${id}.json`)
  return {
    title: post.title,
    content: post.bodyHtml
  }
}

/*
 * @param {string}   url - The name of the json file containing post data
 * @returns {string}     - Name of file minus '.json' file extension
 */
export function formatPostId(url) {
  // There are 5 chars in '.json', so slice url.length - 5
  return url.slice(0, -5)
}

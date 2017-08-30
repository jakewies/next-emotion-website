import moment from 'moment'
import POST_ARCHIVE from '../posts/index.json'

/*
 * @param {object}  archive - A JSON object summarizing a list of posts
 * @returns {array}         - Of individual post objects, sorted by date
 * ---
 * Taken from https://github.com/tscanlin/next-blog, thanks for the inspiration Tim!
 */
export function getPosts() {
  return (
    POST_ARCHIVE &&
    POST_ARCHIVE.fileMap &&
    Object.keys(POST_ARCHIVE.fileMap)
      .filter(file => {
        if (file.indexOf('posts') === 0) {
          return true
        }
      })
      .map(file => POST_ARCHIVE.fileMap[file])
      .sort((a, b) => {
        const aDate = Date.parse(a.date)
        const bDate = Date.parse(b.date)
        return bDate > aDate ? 1 : bDate < aDate ? -1 : 0
      })
  )
}

/*
 * @param {string}   url - The name of the json file containing post data
 * @returns {string}     - Name of file minus '.json' file extension
 */
export function formatPostId(url) {
  // There are 5 chars in '.json', so slice url.length - 5
  return url.slice(0, -5)
}

/*
 * @param {string}   date   - A JavaScript date 
 * @param {string}   format - MM.D.YY
 * @returns {string}        - Formatted string representing post's publish date
 */
export function formatDate(date, format) {
  return moment(date).format(format)
}

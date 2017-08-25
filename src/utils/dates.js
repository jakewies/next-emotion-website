import moment from 'moment'

export function formatDate(date, format) {
  return moment(date).format(format)
}

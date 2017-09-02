import PropTypes from 'prop-types'
import Title from './title'
import Time from './time'

const Header = ({ title, date }) =>
  <header>
    <Title>
      {title}
    </Title>
    <Time>
      {date}
    </Time>
  </header>

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Header

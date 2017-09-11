import { withRouter } from 'next/router'

/* eslint react/prop-types: "off" */

const NavLink = ({ children, router, href }) => {
  const style = {
    color: router.pathname === href ? '#301C6D' : '#8F8AAC'
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default withRouter(NavLink)

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1f1f1f`,
    }}
  >
    <div
      style={{
        margin: `auto 1rem`,
        padding: `1.5rem`,
        display:`flex`,
        justifyContent:`space-between`
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: '30px'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2 css={`color:white;margin: auto 0;`}>
        <Link
          to="/artworks"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >Artworks
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

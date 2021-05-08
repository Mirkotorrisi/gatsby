import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './header.scss'

const Header = ({ siteTitle }) => (
  <header
    className={'header_container'}
  >
    <div
      style={{
      }}
    >
      <h1 title="Dio sbirro"  className={"header_text"}>          
      Main Title
      </h1>
        <div className="header_border"></div>
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

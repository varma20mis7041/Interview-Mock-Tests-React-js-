import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav_container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="website_logo"
      />
    </Link>
  </nav>
)
export default Header

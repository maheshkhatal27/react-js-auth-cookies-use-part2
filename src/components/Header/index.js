import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

/* since header is not presented in app.js i.e. not produced using router the props will not get 
delivered via router method. Hence we need to make use of withRouter functionality and also use export statement as 
export default withRouter(Header) */

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    // now redirecting to login route...but that can;t be done here as it is not render method and no router is used here
    // so we will use props using withRouter functionality
    // here we need history objects..you need to write export default withRouter(Header)
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)

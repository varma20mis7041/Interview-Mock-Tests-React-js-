import './index.css'
import Cookies from 'js-cookie'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <div className="home_bg_container">
      <nav className="nav_bar_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="website_logo"
        />
        <button type="button" className="logout_button" onClick={onClickLogout}>
          Logout
        </button>
      </nav>
      <div className="user_card_details_container">
        <h1 className="home_page_main_heading">
          Your Flexibility, Our Excellence
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          className="bank_card_img"
          alt="digital card"
        />
      </div>
    </div>
  )
}
export default Home

import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="not_found_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        className="not_found_img_element"
        alt="not found"
      />
      <h1 className="not_found_main_heading">Page Not Found</h1>
      <p className="not_found_description">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)
export default NotFound

import './index.css'

const NotFound = props => {
  const onClickHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not_found_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        className="not_found_img_element"
        alt="not found"
      />
      <h1 className="not_found_main_heading">Page Not Found</h1>
      <p className="not_found_description">
        We are sorry, the page you requested could not be found
      </p>
      <button className="not_found_button" type="button" onClick={onClickHome}>
        Home
      </button>
    </div>
  )
}
export default NotFound

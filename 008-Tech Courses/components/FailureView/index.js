import './index.css'
import Header from '../Header'

const FailureView = props => {
  const {fetchAgain} = props
  const onClickRetry = () => fetchAgain()
  return (
    <>
      <Header />
      <div className="failure_view_bg_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          className="failure_view_img"
          alt="failure view"
        />
        <h1 className="failure_page_main_heading">
          Oops! Something Went Wrong
        </h1>
        <p className="failure_page_description">
          We cannot seem to find the page you are looking for
        </p>
        <button type="button" className="retry_button" onClick={onClickRetry}>
          Retry
        </button>
      </div>
    </>
  )
}
export default FailureView

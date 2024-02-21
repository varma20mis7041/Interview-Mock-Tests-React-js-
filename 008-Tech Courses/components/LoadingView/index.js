import './index.css'
import Loader from 'react-loader-spinner'

const LoadingView = () => (
  <div data-testid="loader" className="loader_bg_container">
    <div className="loading_page_header">
      <></>
    </div>
    <div className="loading_container">
      <Loader type="ThreeDots" color="#000000" height={50} width={50} />
    </div>
  </div>
)
export default LoadingView

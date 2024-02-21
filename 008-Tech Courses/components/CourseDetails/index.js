import {Component} from 'react'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import Header from '../Header'
import './index.css'

const activeStateConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CourseDetails extends Component {
  state = {
    currentState: activeStateConstants.initial,
    courseDetails: {},
  }

  componentDidMount() {
    this.fetchCourseDetails()
  }

  fetchCourseDetails = async () => {
    this.setState({currentState: activeStateConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log('history', match)
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const fetchResponse = await fetch(url, options)

    if (fetchResponse.ok === true) {
      const fetchResult = await fetchResponse.json()
      const fetchedCourseDetails = fetchResult.course_details
      const updatedCourseDetails = {
        id: fetchedCourseDetails.id,
        name: fetchedCourseDetails.name,
        imageUrl: fetchedCourseDetails.image_url,
        description: fetchedCourseDetails.description,
      }
      this.setState({
        courseDetails: updatedCourseDetails,
        currentState: activeStateConstants.success,
      })
    } else {
      this.setState({currentState: activeStateConstants.failure})
    }
  }

  displaySuccessView = () => {
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails
    return (
      <>
        <Header />
        <div className="course_details_card_bg_container">
          <div className="course_details_card_container">
            <img
              src={imageUrl}
              className="course_details_img_element"
              alt={name}
            />
            <div className="course_details_name_and_description_container">
              <h1 className="course_details_heading">{name}</h1>
              <p className="course_details_description">{description}</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  displayLoadingView = () => <LoadingView />

  displayFailureView = () => <FailureView fetchAgain={this.fetchAgain} />

  fetchAgain = () => this.fetchCourseDetails()

  displayCourseDetailContent = () => {
    const {currentState} = this.state
    switch (currentState) {
      case activeStateConstants.success:
        return this.displaySuccessView()
      case activeStateConstants.failure:
        return this.displayFailureView()
      case activeStateConstants.loading:
        return this.displayLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="course_details_route_container">
        {this.displayCourseDetailContent()}
      </div>
    )
  }
}
export default CourseDetails

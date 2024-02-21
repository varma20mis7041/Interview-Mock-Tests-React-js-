import {Component} from 'react'
import './index.css'
import CourseItem from '../CourseItem'

import FailureView from '../FailureView'

import LoadingView from '../LoadingView'

import Header from '../Header'

const activeStateConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    coursesList: [],
    currentState: activeStateConstants.initial,
  }

  componentDidMount() {
    this.fetchCourseList()
  }

  fetchCourseList = async () => {
    this.setState({currentState: activeStateConstants.loading})
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const fetchResponse = await fetch(url, options)
    const fetchResults = await fetchResponse.json()
    if (fetchResponse.ok === true) {
      const newCourseList = fetchResults.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))
      this.setState({
        coursesList: newCourseList,
        currentState: activeStateConstants.success,
      })
    } else {
      this.setState({currentState: activeStateConstants.failure})
    }
  }

  displaySuccessView = () => {
    const {coursesList} = this.state
    return (
      <>
        <Header />
        <div className="tech_ara_courses_container">
          <h1 className="main_heading">Courses</h1>
          <ul className="course_items_ul_container">
            {coursesList.map(eachCourse => (
              <CourseItem courseDetails={eachCourse} key={eachCourse.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  displayLoadingView = () => <LoadingView />

  displayFailureView = () => <FailureView fetchAgain={this.fetchAgain} />

  fetchAgain = () => this.fetchCourseList()

  displayTechEraContent = () => {
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
      <div className="tech_ara_bg_container">
        {this.displayTechEraContent()}
      </div>
    )
  }
}
export default Home

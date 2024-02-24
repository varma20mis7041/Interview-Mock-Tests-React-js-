import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProjectItem from '../ProjectItem'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const activeStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class ProjectsPage extends Component {
  state = {
    currentState: activeStates.initial,
    projectsList: [],
    currentCategory: categoriesList[0].id,
  }

  componentDidMount() {
    this.fetchProjectsList()
  }

  fetchProjectsList = async () => {
    this.setState({currentState: activeStates.loading})
    const {currentCategory} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${currentCategory}`
    const options = {
      method: 'GET',
    }
    const fetchResponse = await fetch(url, options)
    if (fetchResponse.ok === true) {
      const results = await fetchResponse.json()
      const updatedProjectList = results.projects.map(eachProject => ({
        id: eachProject.id,
        name: eachProject.name,
        imageUrl: eachProject.image_url,
      }))
      this.setState({
        projectsList: updatedProjectList,
        currentState: activeStates.success,
      })
    } else {
      this.setState({currentState: activeStates.failure})
    }
  }

  onChangeCategory = event =>
    this.setState({currentCategory: event.target.value}, this.fetchProjectsList)

  displayLoadingView = () => (
    <div className="loading_container" data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} color="#328af2" />
    </div>
  )

  displaySuccessView = () => {
    const {projectsList} = this.state
    return (
      <ul className="fetched_projects_ul_list_container">
        {projectsList.map(eachProject => (
          <ProjectItem projectDetails={eachProject} key={eachProject.id} />
        ))}
      </ul>
    )
  }

  displayFailureView = () => (
    <div className="failure_view_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
        className="failure_view_img"
      />
      <h1 className="failure_main_heading">Oops! Something Went Wrong</h1>
      <p className="failure_description">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="retry_button"
        type="button"
        onClick={this.fetchProjectsList}
      >
        Retry
      </button>
    </div>
  )

  displayProjectsPage = () => {
    const {currentState} = this.state
    switch (currentState) {
      case activeStates.success:
        return this.displaySuccessView()
      case activeStates.failure:
        return this.displayFailureView()
      case activeStates.loading:
        return this.displayLoadingView()
      default:
        return null
    }
  }

  render() {
    const {currentCategory} = this.state
    return (
      <div className="projects_page_bg_container">
        <nav className="nav_bar_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
            className="logo_image_element"
          />
        </nav>
        <div className="projects_container">
          <select
            className="select_element"
            onChange={this.onChangeCategory}
            value={currentCategory}
          >
            {categoriesList.map(eachCategory => (
              <option key={eachCategory.id} value={eachCategory.id}>
                {eachCategory.displayText}
              </option>
            ))}
          </select>
          <div className="projects_page_main_content_container">
            {this.displayProjectsPage()}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsPage

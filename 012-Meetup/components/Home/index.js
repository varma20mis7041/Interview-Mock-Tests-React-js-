import './index.css'
import {Link} from 'react-router-dom'
import MeetupContext from '../../Context/MeetupContext'
import Header from '../Header'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {isRegistered, name, topicDisplayText} = value

      console.log('is user Registered', isRegistered)

      const displayContentBasedOnRegistrationStatus = () =>
        isRegistered ? (
          <>
            <h1 className="meetup_host_name">Hello {name}</h1>
            <p className="meetup_topic">Welcome to {topicDisplayText}</p>
          </>
        ) : (
          <>
            <h1 className="home_welcome_heading">Welcome to Meetup</h1>
            <p className="home_welcome_description">
              Please register for the topic
            </p>
            <Link to="/register">
              <button className="register_button" type="button">
                Register
              </button>
            </Link>
          </>
        )

      return (
        <>
          <Header />
          <div className="home_route_bg_container">
            <div className="home_page_meetup_card_container">
              {displayContentBasedOnRegistrationStatus()}
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="home_page_meet_up_img_element"
              />
            </div>
          </div>
        </>
      )
    }}
  </MeetupContext.Consumer>
)
export default Home

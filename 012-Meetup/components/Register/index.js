import './index.css'

import {Component} from 'react'
import Header from '../Header'

import MeetupContext from '../../Context/MeetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    nameInput: '',
    topic: topicsList[0].id,
    showError: false,
  }

  onChangeInput = event => {
    this.setState({nameInput: event.target.value, showError: false})
  }

  onChangeTopic = event => {
    const selectedOption = topicsList.find(
      eachTopic => eachTopic.id === event.target.value,
    )
    this.setState({topic: selectedOption.displayText})
  }

  render() {
    const {nameInput, showError, topic} = this.state

    return (
      <MeetupContext.Consumer>
        {value => {
          const {updateRegistrationStatus, updateName, updateTopic} = value
          const onSubmitForm = event => {
            event.preventDefault()
            if (nameInput === '') {
              this.setState({showError: true})
            } else {
              updateRegistrationStatus()
              updateName(nameInput)
              updateTopic(topic)
              const {history} = this.props
              history.replace('/')
            }
          }
          return (
            <>
              <Header />
              <div className="register_route_bg_container">
                <div className="register_card_container">
                  <div className="img_container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                      alt="website register"
                      className="register_img"
                    />
                  </div>
                  <div className="registration_form_container">
                    <h1 className="registration_form_main_heading">
                      Let us join
                    </h1>
                    <form className="form_element" onSubmit={onSubmitForm}>
                      <div className="form_label_container">
                        <label htmlFor="name" className="label_element">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="input_element"
                          onChange={this.onChangeInput}
                          value={nameInput}
                        />
                        <p className="error_msg">
                          {showError ? 'Please enter your name' : ''}
                        </p>
                      </div>
                      <div className="form_label_container">
                        <label
                          htmlFor="availableTopics"
                          className="label_element"
                        >
                          Topics
                        </label>
                        <select
                          id="availableTopics"
                          className="input_element"
                          onChange={this.onChangeTopic}
                        >
                          {topicsList.map(eachTopic => (
                            <option value={eachTopic.id} key={eachTopic.id}>
                              {eachTopic.displayText}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <button type="submit" className="register_now_button">
                          Register Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}
export default Register

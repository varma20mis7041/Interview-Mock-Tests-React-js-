import {Component} from 'react'
import LanguageItem from '../LanguageItem'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeLanguageGreeting: languageGreetingsList[0],
  }

  onClickLanguageButton = id => {
    const newIndex = languageGreetingsList.findIndex(
      eachItem => eachItem.id === id,
    )
    this.setState({activeLanguageGreeting: languageGreetingsList[newIndex]})
  }

  render() {
    const {activeLanguageGreeting} = this.state
    const {imageUrl, imageAltText} = activeLanguageGreeting
    return (
      <div className="greetings_bg_container">
        <div className="greetings_card_container">
          <h1 className="greetings_main_heading">Multilingual Greetings</h1>
          <ul className="language_buttons_ul_list">
            {languageGreetingsList.map(eachItem => (
              <LanguageItem
                languageDetails={eachItem}
                key={eachItem.id}
                isActive={eachItem.id === activeLanguageGreeting.id}
                onClickLanguageButton={this.onClickLanguageButton}
              />
            ))}
          </ul>
          <img
            src={imageUrl}
            alt={imageAltText}
            className="greeting_img_element"
          />
        </div>
      </div>
    )
  }
}
export default Greetings

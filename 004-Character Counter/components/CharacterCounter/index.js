import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {
    characterList: [],
    characterInputText: '',
  }

  onChangeCharacterInput = event => {
    // if (event.target.value === '') {
    //   alert('Please Enter A Character')
    // } else {
    this.setState({characterInputText: event.target.value})
  }

  onClickAddButton = () => {
    const {characterInputText} = this.state
    if (characterInputText === '') {
      // eslint-disable-next-line
      alert('Please Enter A Character')
    } else {
      const newCharacter = {
        id: uuidv4(),
        characterName: characterInputText,
        count: characterInputText.length,
      }
      this.setState(prevState => ({
        characterList: [...prevState.characterList, newCharacter],
        characterInputText: '',
      }))
    }
  }

  render() {
    const {characterInputText, characterList} = this.state
    return (
      <div className="character_count_bg_container">
        <div className="character_count_card_container">
          <div className="count_input_container">
            <h1 className="character_input_container_heading">
              Character Counter
            </h1>

            <form className="input_form_container">
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="text_input_element"
                value={characterInputText}
                onChange={this.onChangeCharacterInput}
              />
              <button
                type="button"
                className="add_button"
                onClick={this.onClickAddButton}
              >
                Add
              </button>
            </form>
          </div>
          <div className="count_results_container">
            <h1 className="count_container_heading">
              Count the characters like a Boss...
            </h1>
            {characterList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no_user_inputs_img_element"
              />
            ) : (
              <ul className="characters_display_list_container">
                {characterList.map(eachCharacter => (
                  <li key={eachCharacter.id}>
                    <p className="entered_character_element">
                      {eachCharacter.characterName} : {eachCharacter.count}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter

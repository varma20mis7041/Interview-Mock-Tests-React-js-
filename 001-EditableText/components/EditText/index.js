import {Component} from 'react'
import './index.css'

class EditText extends Component {
  state = {
    text: '',
    save: false,
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onClickSaveButton = () => {
    this.setState(prevState => ({save: !prevState.save}))
  }

  render() {
    const {text, save} = this.state
    return (
      <div className="edit_text_bg_container">
        <div className="edit_text_card_container">
          <h1 className="main_heading">Editable Text Input</h1>
          <div className="input_and_button_container">
            <div className="input_and_text_container">
              {save ? (
                <p className="text_msg">{text}</p>
              ) : (
                <input
                  type="text"
                  className="input_element"
                  onChange={this.onChangeText}
                  value={text}
                />
              )}
            </div>
            <button
              className="button"
              type="button"
              onClick={this.onClickSaveButton}
            >
              {save ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditText

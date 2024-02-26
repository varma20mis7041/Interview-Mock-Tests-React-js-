import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  TextEditorCardContainer,
  TextEditorImgContainer,
  Heading,
  TextEditorImage,
  TextEditorCardRightSideBgContainer,
  TextAreaConfigurationContainer,
  EditItemsContainer,
  EditButton,
  TextAreaInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderLineActive: false,
  }

  hrLine = {
    width: '100%', // Corrected to be a string
    color: '#cbd5e1', // Enclosed in quotes
    boxShadow: '0 0 0 0.5px #cbd5e1',
    height: '0px',
    border: 'none',
    backgroundColor: '#cbd5e1', // Enclosed in quotes
    margin: '0px',
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderlineButton = () => {
    this.setState(prevState => ({
      isUnderLineActive: !prevState.isUnderLineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderLineActive} = this.state
    return (
      <BgContainer>
        <TextEditorCardContainer>
          <TextEditorImgContainer>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImgContainer>
          <TextEditorCardRightSideBgContainer>
            <TextAreaConfigurationContainer>
              <EditItemsContainer>
                <EditButton
                  data-testid="bold"
                  onClick={this.onClickBoldButton}
                  isActive={isBoldActive}
                >
                  <VscBold size={25} />
                </EditButton>
                <EditButton
                  data-testid="italic"
                  onClick={this.onClickItalicButton}
                  isActive={isItalicActive}
                >
                  <GoItalic size={25} />
                </EditButton>
                <EditButton
                  data-testid="underline"
                  onClick={this.onClickUnderlineButton}
                  isActive={isUnderLineActive}
                >
                  <AiOutlineUnderline size={25} />
                </EditButton>
              </EditItemsContainer>
              <hr style={this.hrLine} />
              <TextAreaInput
                isBoldActive={isBoldActive}
                isItalicActive={isItalicActive}
                isUnderLineActive={isUnderLineActive}
                placeholder="Enter your text here!"
              />
            </TextAreaConfigurationContainer>
          </TextEditorCardRightSideBgContainer>
        </TextEditorCardContainer>
      </BgContainer>
    )
  }
}
export default TextEditor

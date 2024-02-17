import './index.css'

const TagItem = props => {
  const {tagDetails, onClickTagItem, isActive} = props

  const {optionId, displayText} = tagDetails
  console.log(displayText, ': ', isActive)
  const onClickTagButton = () => onClickTagItem(optionId)

  return (
    <li>
      <button
        type="button"
        className={`tag_button_element ${isActive ? 'active' : ''}`}
        onClick={onClickTagButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TagItem

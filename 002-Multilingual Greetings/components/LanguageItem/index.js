import './index.css'

const LanguageItem = props => {
  const {languageDetails, isActive, onClickLanguageButton} = props
  const {id, buttonText} = languageDetails
  const onClickButton = () => onClickLanguageButton(id)
  return (
    <li>
      <button
        className={`language_button ${isActive ? 'active_button' : ''}`}
        type="button"
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageItem

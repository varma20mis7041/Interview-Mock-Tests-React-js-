import './index.css'

const CountryFlagItem = props => {
  const {countryDetails, onClickRemoveButton} = props
  const {id, name, imageUrl} = countryDetails
  const onClickRemove = () => onClickRemoveButton(id)
  return (
    <li className="visited_country_card_container">
      <img src={imageUrl} alt="thumbnail" className="flag_img" />
      <div className="name_remove_container">
        <p className="visited_country_name">{name}</p>
        <button type="button" className="remove_button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default CountryFlagItem

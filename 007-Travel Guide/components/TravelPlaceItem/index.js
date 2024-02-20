import './index.css'

const TravelPlaceItem = props => {
  const {placeDetails} = props

  const {name, imageUrl, description} = placeDetails

  return (
    <li className="travel_place_card_container">
      <img src={imageUrl} className="place_img_element" alt={name} />
      <div className="travel_place_card_bottom_container">
        <h1 className="travel_place_name">{name}</h1>
        <p className="travel_place_description">{description}</p>
      </div>
    </li>
  )
}
export default TravelPlaceItem

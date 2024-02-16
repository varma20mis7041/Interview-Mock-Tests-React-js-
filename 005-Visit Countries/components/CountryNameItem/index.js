import './index.css'

const CountryNameItem = props => {
  const {countryDetails, onClickVisitStatus} = props
  const {id, name, isVisited} = countryDetails

  // console.log('name :', isVisited)
  const onClickStatus = () => onClickVisitStatus(id)
  return (
    <li className="country_item">
      <p className="country_name_element">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="visit_button" onClick={onClickStatus}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryNameItem

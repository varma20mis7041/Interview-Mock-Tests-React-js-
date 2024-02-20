import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TravelPlaceItem from '../TravelPlaceItem'

class TravelGuide extends Component {
  state = {
    travelPlacesList: [],
  }

  componentDidMount() {
    this.fetchList()
  }

  fetchList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const result = await response.json()
    const updatedPlacesList = result.packages.map(eachPlace => ({
      id: eachPlace.id,
      name: eachPlace.name,
      imageUrl: eachPlace.image_url,
      description: eachPlace.description,
    }))
    this.setState({travelPlacesList: updatedPlacesList})
  }

  render() {
    const {travelPlacesList} = this.state
    return (
      <div className="travel_guide_bg_container">
        <h1 className="main_heading">Travel Guide</h1>
        {travelPlacesList.length === 0 ? (
          <div data-testid="loader" className="loader_container">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="travel_places_ul_container">
            {travelPlacesList.map(eachPlace => (
              <TravelPlaceItem placeDetails={eachPlace} key={eachPlace.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default TravelGuide

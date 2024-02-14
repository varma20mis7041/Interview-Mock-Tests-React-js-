import {RiSearchLine} from 'react-icons/ri'
import {Component} from 'react'
import './index.css'
import SongItem from '../SongItem'

class SongsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      deletedList: [],
    }
  }

  onChangeSearchInput = event => {
    const searchedText = event.target.value
    this.setState({searchInput: searchedText})
  }

  onClickDelete = id => {
    this.setState(prevState => ({deletedList: [...prevState.deletedList, id]}))
  }

  render() {
    const {songsList} = this.props
    const {searchInput, deletedList} = this.state

    const filteredList = songsList.filter(
      eachSong =>
        eachSong.name.toLowerCase().includes(searchInput.toLowerCase()) &&
        !deletedList.includes(eachSong.id),
    )

    return (
      <div>
        <div className="top_section">
          <h1 className="singer_heading">Ed Sheeran</h1>
          <p className="singer_text">Singer</p>
        </div>
        <div className="songs_section">
          <div className="play_list_heading_and_search_bar_container">
            <h1 className="songs_section_main_heading">Songs Playlist</h1>
            <div className="search_input_container">
              <input
                type="search"
                className="search_input_element"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <RiSearchLine size={20} />
            </div>
          </div>
          {filteredList.length === 0 ? (
            <div className="not_found_container">
              <p className="not_found_heading">No Songs Found</p>
            </div>
          ) : (
            <ul className="songs_list_bg_container">
              {filteredList.map(eachSong => (
                <SongItem
                  key={eachSong.id}
                  songDetails={eachSong}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default SongsPage

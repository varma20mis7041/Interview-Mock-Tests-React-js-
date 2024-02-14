import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const SongItem = props => {
  const {songDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const onDelete = () => onClickDelete(id)

  return (
    <li className="song_item_card">
      <div className="song_item_card_left_part">
        <img src={imageUrl} alt="track" className="img_element" />
        <div className="name_and_genre_container">
          <p className="song_name">{name}</p>
          <p className="song_genre">{genre}</p>
        </div>
      </div>
      <div className="song_item_card_right_part">
        <p className="duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          aria-label="delete"
          className="delete_button"
          onClick={onDelete}
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}
export default SongItem

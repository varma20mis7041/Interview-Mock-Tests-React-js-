import './index.css'
import {Link} from 'react-router-dom'

const CourseItem = props => {
  const {courseDetails} = props

  const {id, logoUrl, name} = courseDetails
  return (
    <Link to={`courses/${id}`} className="link_element">
      <li className="course_item">
        <img src={logoUrl} alt={name} className="course_item_logo_element" />
        <p className="course_item_name">{name}</p>
      </li>
    </Link>
  )
}
export default CourseItem

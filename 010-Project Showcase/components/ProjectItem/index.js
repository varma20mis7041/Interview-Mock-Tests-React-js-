import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails
  return (
    <li className="project_card_container">
      <img src={imageUrl} alt={name} className="project_img" />
      <p className="project_name">{name}</p>
    </li>
  )
}
export default ProjectItem

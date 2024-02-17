import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {task, category} = taskDetails
  return (
    <li className="list_item_container">
      <p className="task_name">{task}</p>
      <p className="task_category">{category}</p>
    </li>
  )
}
export default TaskItem

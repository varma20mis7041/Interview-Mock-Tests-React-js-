import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasksHome extends Component {
  state = {
    taskInput: '',
    taskCategory: tagsList[0].optionId,
    activeTag: 'NONE',
    addedTasksList: [],
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeSelectOption = event => {
    // console.log(event.target.value)
    this.setState({taskCategory: event.target.value})
  }

  onClickSubmitForm = event => {
    event.preventDefault()
    const {taskInput, taskCategory} = this.state
    if (taskInput === '' || taskCategory === '') {
      // eslint-disable-next-line
      alert('Please fill the form completely')
    } else {
      const selectedTag = tagsList.find(
        eachTag => eachTag.optionId === taskCategory,
      )
      const newTask = {
        id: uuidv4(),
        task: taskInput,
        category: selectedTag.displayText,
        categoryId: taskCategory,
      }
      this.setState(prevState => ({
        addedTasksList: [...prevState.addedTasksList, newTask],
        taskInput: '',
        taskCategory: tagsList[0].optionId,
      }))
    }
  }

  onClickTagItem = optionId => {
    const {activeTag} = this.state
    if (activeTag === 'NONE') {
      this.setState({activeTag: optionId})
    } else if (activeTag === optionId) {
      this.setState({activeTag: 'NONE'})
    } else {
      this.setState({activeTag: optionId})
    }
  }

  render() {
    const {activeTag, addedTasksList, taskInput, taskCategory} = this.state
    const currentActiveCategoryTasksList = addedTasksList.filter(eachTask => {
      if (activeTag === 'NONE' || eachTask.categoryId === activeTag) {
        return true
      }
      return false
    })

    return (
      <div className="my_tasks_manager_bg_container">
        <div className="create_task_bg_container">
          <form className="form_element" onSubmit={this.onClickSubmitForm}>
            <h1 className="create_task_main_heading_element">Create a Task!</h1>
            <div className="form_label_container">
              <label className="label_element" htmlFor="task_input">
                Task
              </label>
              <input
                type="text"
                placeholder="Enter the task here"
                id="task_input"
                className="input_element"
                onChange={this.onChangeTaskInput}
                value={taskInput}
              />
            </div>
            <div className="form_label_container">
              <label className="label_element" htmlFor="select_element">
                Tags
              </label>
              <select
                id="select_element"
                className="select_element"
                onChange={this.onChangeSelectOption}
                value={taskCategory}
              >
                {tagsList.map(eachTag => (
                  <option value={eachTag.optionId} key={eachTag.optionId}>
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add_task_button">
              Add Task
            </button>
          </form>
        </div>
        <div className="tasks_display_bg_container">
          <h1 className="display_tasks_heading">Tags</h1>
          <ul className="tags_bg_list_container">
            {tagsList.map(eachTag => (
              <TagItem
                tagDetails={eachTag}
                key={eachTag.optionId}
                onClickTagItem={this.onClickTagItem}
                isActive={eachTag.optionId === activeTag}
              />
            ))}
          </ul>
          <h1 className="display_tasks_heading">Tasks</h1>
          {currentActiveCategoryTasksList.length === 0 ? (
            <div className="no_added_tasks_container">
              <p className="no_tasks_heading">No Tasks Added Yet!</p>
            </div>
          ) : (
            <ul className="added_tasks_list_container">
              {currentActiveCategoryTasksList.map(eachTask => (
                <TaskItem taskDetails={eachTask} key={eachTask.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default MyTasksHome

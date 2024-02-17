# My Tasks
## [Link](http://bvreactjs52.ccbp.tech) 
## Functionalities

1. **Initial State:**
   - The application starts with an empty list of tasks and Task input.
   - The Tags select element defaults to the first item in the given `tagsList`.

2. **Add Task:**
   - Users can add new tasks by providing non-empty values for Tasks, selecting a Tag, and clicking the "Add Task" button.
   - Upon clicking, the application adds the new task to the list, and the Task input and Tag select elements are reset to their initial values.

3. **Tag Filtering:**
   - Tags are already available in the `tagsList`.
   - Clicking a single tag changes it to an active state, and tasks are filtered accordingly.
   - If no tag is active, the application displays all tasks.

## App Component Details

- The `App` component comes pre-loaded with the necessary features, including the `tagsList`.
  - The list contains tag details with options like:

    - **optionId:** String
    - **displayText:** String

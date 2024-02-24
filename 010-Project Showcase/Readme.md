# Projects App
## Concepts Used : setState Callback Function

[link](https://bvreactjs56.ccbp.tech)

## Initial State

- When the app is opened initially:
  - An HTTP GET request is made to `projectsApiUrl` with the query parameter `category` set to its initial value, which is `ALL`.
  - A loader is displayed while fetching the data.
  - After the data is fetched successfully, the projects list received in the API response is displayed.

## Category Selection

- When a category option is selected:
  - An HTTP GET request is made to `projectsApiUrl` with the query parameter `category` set to the id of the active category option.
  - A loader is displayed while fetching the data.
  - After the data is fetched successfully, the projects list received in the API response is displayed.

## App Component Details

- The `App` component is provided with `categoriesList`.
  - It consists of a list of category objects with the following properties in each category object:
    - **id:** String
    - **displayText:** String

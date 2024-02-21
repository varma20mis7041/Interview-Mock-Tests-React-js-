# Tech Courses App
## Concepts Used:Fetching and Routing


## Initial State

- When the app is opened initially, the Home Route is displayed.

## Home Route

- When the Home Route is opened:
  - An HTTP GET request is made to `coursesApiUrl`.
  - A loader is displayed while the HTTP request is fetching the data.
  - If the HTTP GET request is successful, the list of courses received in response is displayed.
  - If the HTTP GET request is unsuccessful, the Failure view is displayed.
  - When the Retry button is clicked, another HTTP GET request is made to `coursesApiUrl`.
  - When a course is clicked, the page is navigated to the Course Item Details Route.

## Course Item Details Route

- When the Course Item Details Route is opened:
  - An HTTP GET request is made to `courseDetailsApiUrl` with the course id as the path parameter.
  - A loader is displayed while the HTTP request is fetching the data.
  - If the HTTP GET request is successful, the course details received in response are displayed.
  - If the HTTP GET request is unsuccessful, the Failure view is displayed.
  - When the Retry button is clicked, another HTTP GET request is made to `courseDetailsApiUrl`.

## Not Found Route

- When a random path is provided in the URL, the page is navigated to the Not Found Route.
- When the website logo image is clicked, the page is navigated to the Home Route.

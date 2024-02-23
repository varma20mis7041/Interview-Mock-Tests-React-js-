# Authentication App
### concepts used:Authentication
[Link](http://bvreactjs55.ccbp.tech) 

## Login Route

- When invalid credentials are provided, and the Login button is clicked:
  - The error message received from the response is displayed.
- When valid credentials are provided, and the Login button is clicked:
  - The page is navigated to the Home Route.
- When an unauthenticated user tries to access the Home Route:
  - The page is navigated to the Login Route.
- When an authenticated user tries to access the Home Route:
  - The page remains on the Home Route.

## Home Route

- When an authenticated user tries to access the Login Route:
  - The page is navigated to the Home Route.
- When the Logout button is clicked:
  - The page is navigated to the Login Route.

## Not Found Route

- When a random path is provided in the URL:
  - The page is navigated to the Not Found Route.

# Meet up 
## Concepts Used: React Context 
[website link](https://bvreactjs58.ccbp.tech)

## Home Route

- Clicking the "Register" button in the Home Route navigates to the Register Route.
- Clicking the "Register Now" button in the Register Route displays the input name and selected topic from the Register Route in the Home Route.

## Register Route

- The input element starts with an empty value, and the select element starts with the first item in the given `topicsList`.
- Clicking the "Register Now" button with an empty input value displays the respective error message, and the page does not navigate to the Home Route.
- Providing values for both the input and select elements and clicking "Register Now" successfully navigates to the Home Route.

## Not Found Route

- Entering a random path in the URL navigates to the Not Found Route.


## App Component

- The App component is provided with a `topicsList`, consisting of a list of topic objects with properties:
  - id: String
  - displayText: String

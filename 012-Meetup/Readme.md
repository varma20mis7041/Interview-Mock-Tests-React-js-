# Meet up 

## Concepts Used : React Context 
[website link](https://bvreactjs58.ccbp.tech)

## Home Route

- Initially, when the Register button in the Home Route is clicked:
  - The page is navigated to the Register Route.
- When the Register Now button in the Register Route is clicked:
  - The input name and selected topic in the Register Route should be displayed in the Home Route.

## Register Route

- Initially, the value in the input element is empty, and the selected value in the select element is the first item in the given `topicsList`.
- When the Register Now button is clicked with an empty input value:
  - The respective error message is displayed, and the page is not navigated to the Home Route.
- When values are provided for both the input and select elements, and the Register Now button is clicked:
  - The page is navigated to the Home Route.

## Not Found Route

- When a random path is provided in the URL:
  - The page is navigated to the Not Found Route.

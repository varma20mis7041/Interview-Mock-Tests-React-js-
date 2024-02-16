# Visit Countries
## Concepts used : Lists and Keys

## Initial State

- Initially, the list of given countries should be displayed.
- If the country is not visited, it should be displayed with the "Visit" button.
- If the country is visited, it should be displayed with the text "Visited" and also displayed in the visited countries.

## Visit Functionality

- When a "Visit" button of the country is clicked:
  - The country should be added to the visited countries.
  - The "Visit" button of the respective country should be replaced with the text "Visited."

## Remove Functionality

- When a "Remove" button in one of the visited countries is clicked:
  - The respective visited country should be removed from the visited countries.
  - The "Visited" text of the respective visited country should be replaced with a "Visit" button.

## No Visited Countries View

- When all the visited countries are removed:
  - Display the "No Visited Countries" view.

## App Component Details

- The `App` component consists of the `initialCountriesList`.
  - It consists of a list of countries with the following properties in each country object:
    - **id:** String
    - **name:** String
    - **imageUrl:** String
    - **isVisited:** Boolean

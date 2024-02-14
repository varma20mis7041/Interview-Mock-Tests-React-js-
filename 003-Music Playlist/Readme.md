# Track List App

## Initial State

- Initially, the list of given track items should be displayed with a delete button for each track item.

## Search Functionality

- When a non-empty value with key "name" from the `initialTracksList` provided in the search input:
  - Display the track items that include the search input, irrespective of case.

## Delete Functionality

- When the delete button of a track item is clicked:
  - The respective track item should be deleted from the list of track items.

## No Songs Found View

- When a non-empty value is provided in the search input element, and no track item includes the value given in the search input:
  - Display the "No Songs Found" view.

## All Track Items Deleted

- When all track items are deleted:
  - Display the "No Songs Found" view.

## App Component Details

- The `App` is provided with `initialTracksList`.
  - It consists of a list of `trackItem` objects with the following properties in each `trackItem` object:
    - **id:** String
    - **imageUrl:** String
    - **name:** String
    - **genre:** String
    - **duration:** String

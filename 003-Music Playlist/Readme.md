Initially, the list of given track items should be displayed with a delete button for each track item
When a non-empty value with key name from the initialTracksList provided in the search input then display the track items which includes the search input irrespective of case
When the delete button of a track item is clicked, the respective track item should be deleted from the list of track items
When a non-empty value is provided in the search input element, and no track item includes the value given in the search input, then No Songs Found View should be displayed
When all track items are deleted, then No Songs Found View should be displayed

The App is provided with initialTracksList. It consists of a list of trackItem objects with the following properties in each trackItem object

Key	Data Type
id	String
imageUrl	String
name	String
genre	String
duration	String

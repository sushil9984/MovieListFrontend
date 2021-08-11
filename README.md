# MovieListFrontend

Used Angular, Bootstrap for the UI development with Typescript
There are 2 Components
- MoviesListComponent
- MovieDetailsComponent

1. MoviesListComponent display list of movies returned by Backend (BE). Title, Location and Language to be more specific.
- User can Filter data based on Title by entering Title in the search box at the top of the list.
- User can sort the table based on the Title, Location and Language.
- Actions columns at the moment is used to view more details of a specific movie. This can be extended further to Edit / Delete.
- Once user clicks on View Details he is redirected to the second component to view other details like Poster, Stills, Sound Effects, Ratings etc..

2. MovieDetailsComponent displays other details such as Poster, Stills, Sound Effects, Ratings etc. for a specific movie which the user has selected.
- User can go back to the main list by clicking on the GoBack button.
 
Execution - 
- Please make sure you start Backend application before running Frontend.
- Clone the repository locally and run using an IDE such as Visual Studio Code
- You can use ng serve -o to run the application on a default port of 4200.
- I have used Routing so use - http://localhost:4200/movies to get started. 

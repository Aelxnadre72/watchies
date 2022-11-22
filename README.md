# Watchies

Build apk with 
yarn eas build -p android --profile preview
preview is just the label for this apk build. Can be changed to something else like development.

## Run Instructions
Check if you have yarn installed:
```bash
yarn --version
```

If you get yarn command not found:
```bash
npm install --global yarn
```
```bash
yarn --version
```

Then inside watchies:
```bash
yarn start
```

1. Download expo app from google play or app store. 
2. Scan the qr code. 
3. If it dosent start building on the first try, close the app-window, go back to the expo-app and scan again.

The phone and the computer needs to be on the same internet connection. 

If you get the error the error message: "apiV2Error: Entity Not Authorized." in the terminal:
- Cancel what is runnig in the terminal and run the command:
```bash
expo logout
```
yarn start again and scan the qr code. 


## About Watchies 
Watchies is a React Native application. The main functionality of the application is that you can search for a movie in a database of 37,004 movies. You are able to filter and sort, as well as adding a movie to your user's favorites list. 

### Login Page
When you open the application you will be directed to the initial page, the login page. Here you can enter your email and password to sign in, or create a new account. The form handles various errors and gives feedback to the user.
#pictureofLogin 

### Movie Search Page
After signing in you will be directed to the page for movie search. Here you are able to search for a movie, filter and sort.
#Hovedbilde 
You can click on a movie to view more information as well as adding it to favorites.
#movieinfocard

### Favorie Movies Page
On this page you will be able to see all your favorite movies previosly added.
#favoritespicture

### Dark/Light Mode
On all pages there is a switch available where you can change the mode between light and dark. 
#showoneChangePicture


## New implementations/changes
New implementations/changes:
- Restructure/rewrite code in Movie and Favorites - into seperate components.
- Better validation and error feedback in Login.
- Saves and checks if the user is logged in to skip over the login page and navigate straight to movies if already logged in. 
- Log out modal that asks if the user wants to log out.
- New bottom navbar.
- Redesigned login page.
- Rewrote and redesigned header: searchbar, dropdowns, brightness-mode switch and user-info.
- New logo.
- Improved favorites so it does not rerender the whole favorite list when making a change to the favorite page.
- Expanded dark/light mode to change most of the application and not just the background/text color.
- Stores which light-mode activated.
- Fixed a bug from project 3 that made it possible to create several users with the same email through sign up on the login page.
- Rewrote the infinite list with a flatlist.
- Wrote functionality that makes the header (searchbar and dropdowns) visible from start to the top of the first movie component and when swiping up (faster than a very low speed), and invisible when swiping down (faster than a very low speed).
- Added more precise feedback when the flatlist is loading new movies, or if there is no more movies or if the search does not match any movies.
- Deactivate swipe back (especially important on login-page). Swipe back gesture is still usable instead of the "close" button when you have pressed on a movie.
- Redesigned buttons on the movieinfo modal (when clicking on a movie).
- Added proxy url to backend from project 3.


## Work process
Throughout this project, we have practiced pair programming as a development technique. With this technique, the pair works from one computer, which is why all the commits in this project are committed by only one group member. We chose this development technique because of the valuable learning outcome for both parties. 

We also viewed it as not necessary to have issues for each component as most of them were fully developed in Project 3. The changes were just to rewrite or make smaller changes for them to work in React Native. 

## Testing
The application is tested with expo go on android. It is tested with two different units:
- aspect ratio 20.1:9
- aspect ratio 18.7:9
The application is also tested as an installed apk on an android unit.
# **Ski Village**
## Season Pass Comparison Tool

## **Introduction**

Ski Village is a website that lets users compare the three major season passes for ski resorts around the world. Instead of currently having to bounce between sites to compare which pass includes which mountains, you can now easily come to Ski Village and compare prices, locations, and restrictions then click a link and go buy the pass you like best.

## **User Experience (UX)**

### User Stories
##### *First Time Users*
* As a first time user, I would like to easily understand the purpose of the site

* As a first time user, I would like to easily navigate through the sites content.

* As a first time user, the sites organisation should be clear and easily understood.

##### *Returning Visitors*
* As a returning visitor, I would like to see up to date information on mountains and prices.

* As a returning visitor, I would like to see new resorts added to the map tool as they become available.

##### *Frequent Visitors*
* As a frequent visitor, I would like easy access to the sites social media accounts.

* As a frequent visitor, I would like social media accounts to be up to date with current promotions.

### Target Audience
* Ski and snowboard enthusiasts
* People planning winter vacations to mountain resorts
* Avid travelers 
* People living in mountainous regions

### User Goals
* Inform users about all options available to them
* Allow users to make an educated decision on their season pass purchase
* Users can potentially plan roadtrips using our map tool to see different locations available to them
* Let users compare prices of passes and mountain lift tickets to save money

### Design
##### *Color Scheme*
* The main four colors repeated throughout the site are:

  1. Blue - rgb(43, 83, 196)
  1. Yellow - rgb(229, 233, 3)
  1. Salmon - rgb(255, 104, 98)
  1. White

##### *Typography*
* Black Han Sans is the font used for all headers and the Ski Village "logo". All information and text throughout the site has been written in Oswald with Sans Serif as the fallback font on the occasion the sites other fonts aren't loading properly.

##### *Imagery*
* Each page contains a large background image of skiers or mountains to match the purpose of the site and spark excitement in users.

##### *Wireframes*
* All wireframes can be viewed in the folder marked "wireframe" in the repo.

##### *Homepage* 
* All pages were designed for ease of use and avoid confusion. Landing pages on both desktop and mobile have a hamburger icon in the top right corner containing a dropdown menu for access to other pages and links to all social media accounts.

<p align="center"><img src="/images/desktop.png" width="400"></p>

* Both mobile and desktop view also contain a link on the bottom informing users about the interactive map feature to help users explore the site quicker.

<p align="center"><img src="/images/mobile.png" width="200" height="400"></p>

* As you scroll down the homepage you will come across a button leading to our pass information page as well as social links in the footer. 

* These buttons and links will allow easy navigation throughout the site for those who missed the menu icon.

<p align="center"><img src="/images/homebottom.png" width="400"></p>

##### *Maps page*
* The map page implements the google maps api and allows users to see and compare the locations of all mountain resorts available on each pass. 

* On the desktop view there are three buttons location at the top of the screen that toggle markers on and off the map so you can visually compare locations for each pass.

* As a pass is toggled on (Epic Pass, Mountain Collective and Ikon Pass), markers in the corresponding color will show on the map as well as a container with a list of links to all the mountains it offers.

* Along with the ability to toggle the locations on and off the map, users can also click on the markers to show infoboxes that contain details of that resorts accessibility. When a marker is clicked the map will center and zoom in to that location.

<p align="center"><img src="/images/mapinfobox.png" width="400"></p>

<p align="center"><img src="/images/maplists.png" width="400"></p>

* To improve visibility and ease of use on mobile devices, a media query has been used to set the map to 100% of the screen. Instead of buttons to toggle markers on and off, there is a "Map Options" dropdown menu in the top corner.

<p align="center"><img src="/images/mobilemenu.png" width="200" height="400"></p>

<p align="center"><img src="/images/mapmobile.png" width="200" height="400"></p>

##### *Pass Info Page*
* The pass info page has all information organized neatly in three columns, one for each pass.

* A scroll to top button has been installed at the bottom to make the page more user friendly.

* All mountain names throughout this page and site are workable links that lead to that resorts webpage.

* A "Click To Buy" button that leads to each of the passes websites has been conveniently placed at the bottom of the info page for users that are ready to purchase.

<p align="center"><img src="/images/infopage.png" width="400"></p>

## **Features**
* Responsive on all devices.
* Interactive Google Map API.

## **Technologies Used**
### Languages Used
* HTML5
* CSS3
* JavaScript
* jQuery

### Frameworks, Libraries & Programs Used
1. [Bootstrap 4.5.0:](https://getbootstrap.com/) 
  * Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Google Fonts:](https://fonts.google.com/) 
  * Google fonts were used to import the "Black Han Sans" and "Oswald" fonts into the style.css file which is used on all pages throughout the project.
3. [Font Awesome:](https://fontawesome.com/)
  * Font Awesome was used on all pages throughout the website to add icons for UX purposes.
4. [jQuery 3.5.1:](https://code.jquery.com/)
  * The jQuery toggle function was used multiple times throughout this project as well as its scroll to top function.
5. [JavaScript 4.5.2:](https://getbootstrap.com/docs/4.0/getting-started/javascript/) 
  * The Bootstrap JavaScript bundle was used multiple times throughout this site, primarily for Google Map interaction. 
6. [Google Maps](https://developers.google.com/maps/documentation)
  * The Google Maps platform was used to access its API and codes for the maps page in this project.
7. [Git:](https://git-scm.com/)
  * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to Github.
8. [GitHub:](https://github.com/)  
  * GitHub is used to store the projects code after being pushed from Git.
9. [Balsamiq:](https://balsamiq.com/)
  * Balsamiq was used to create the wireframes during the design process.        


















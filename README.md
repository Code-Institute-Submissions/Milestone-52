<p align="center"><img src="/assets/images/devices2.png" width="400"></p>


# **Ski Village**
View the live project [HERE.](https://ryanrayn.github.io/Milestone-2/index.html)

***

## **Introduction**

Ski Village is a website that lets users compare the three major season passes for ski resorts around the world. Instead of currently having to bounce between sites to compare which pass includes which mountains, you can now easily come to Ski Village and compare prices, locations, and restrictions then, click a link and go buy the pass you like best.

***

## **Table Of Contents**

  * [**Introduction**](#--introduction--)
  * [**User Experience (UX)**](#--user-experience--ux---)
    + [User Stories](#user-stories)
        
    + [Target Audience](#target-audience)
    + [User Goals](#user-goals)
    + [Design](#design)
    + [Wireframes](#wireframes)
  * [**Features**](#--features--)
  * [**Technologies Used**](#--technologies-used--)
    + [Languages Used](#languages-used)
    + [Frameworks, Libraries & Programs Used](#frameworks--libraries---programs-used)
  * [**Testing**](#--testing--)
    + [Testing User Stories from UX Section](#testing-user-stories-from-ux-section)
    + [Further Testing](#further-testing)
    + [Known Bugs](#known-bugs)
  * [**Deployment**](#--deployment--)
  * [**Credits**](#--credits--)
    + [Code](#code)
    + [Content](#content)
    + [Media](#media)
    + [Acknowledgements](#acknowledgements)

***

## **User Experience (UX)**

### User Stories
##### *First Time Users*
* As a first time user, I would like to easily understand the purpose of the site

* As a first time user, I would like to easily navigate through the site's content.

* As a first time user, I would like to easily access the website for each resort and season pass for more information.

##### *Returning Visitors*
* As a returning visitor, I would like to see up to date information on mountains and prices.

##### *Frequent Visitors*
* As a frequent visitor, I would like easy access to the site's social media accounts.

* As a frequent visitor, I would like social media accounts to be up to date with current promotions.

### Target Audience
* Ski and snowboard enthusiasts
* People planning winter vacations to mountain resorts
* Avid travelers 
* People living in mountainous regions

### User Goals
* Inform users about all options available to them
* Allow users to make an educated decision on their season pass purchase
* Users can potentially plan road trips using our map tool to see different locations available to them
* Let users compare prices of passes and mountain lift tickets to save money

### Design
##### *Color Scheme*
* The main four colors repeated throughout the site are:

  1. Blue - rgb(43, 83, 196)
  1. Yellow - rgb(229, 233, 3)
  1. Salmon - rgb(255, 104, 98)
  1. White

##### *Typography*
* Black Han Sans is the font used for all headers and the Ski Village "logo". All information and text throughout the site have been written in Oswald with Sans Serif as the fallback font on the occasion the sites other fonts aren't loading properly.

##### *Imagery*
* Each page contains a large background image of skiers or mountains to match the purpose of the site and spark excitement in users.

##### *Homepage* 
* All pages were designed for ease of use and avoid confusion. Landing pages on both desktop and mobile have a hamburger icon in the top right corner containing a dropdown menu for access to other pages and links to all social media accounts.

<p align="center"><img src="/assets/images/desktop2.png" width="400"></p>

* Both mobile and desktop views also contain a link on the bottom informing users about the interactive map feature to help users explore the site quicker.

<p align="center"><img src="/assets/images/mobile.png" width="200" height="400"></p>

* As you scroll down the homepage you will come across a button leading to our pass information page as well as social links in the footer. 

* These buttons and links will allow easy navigation throughout the site for those who missed the menu icon.

<p align="center"><img src="/assets/images/homebottom.png" width="400"></p>

##### *Maps page*
* The map page implements the google maps API and allows users to see and compare the locations of all mountain resorts available on each pass. 

* On the desktop view there are three buttons located at the top of the screen that toggle markers on and off the map so you can visually compare locations for each pass.

* As a pass is toggled on (Epic Pass, Mountain Collective, and Ikon Pass), markers in the corresponding color will show on the map as well as a container with a list of links to all the mountains it offers.

* Along with the ability to toggle the locations on and off the map, users can also click on the markers to show infoboxes that contain details of that resorts accessibility. When a marker is clicked the map will center and zoom in to that location.

<p align="center"><img src="/assets/images/mapinfobox.png" width="400"></p>

<p align="center"><img src="/assets/images/maplists.png" width="400"></p>

* To improve visibility and ease of use on mobile devices, a media query has been used to set the map to 100% of the screen. Instead of buttons to toggle markers on and off, there is a "Map Options" dropdown menu in the top corner.

<p align="center"><img src="/assets/images/mobilemenu.png" width="200" height="400"></p>

<p align="center"><img src="/assets/images/mapmobile.png" width="200" height="400"></p>

##### *Pass Info Page*
* The pass info page has all information organized neatly in three columns, one for each pass.

* A scroll to top button has been installed at the bottom to make the page more user friendly.

* All mountain names throughout this page and site are workable links that lead to that resorts webpage.

* A "Click To Buy" button that leads to each of the passes websites has been conveniently placed at the bottom of the info page for users that are ready to purchase.

<p align="center"><img src="/assets/images/infopage.png" width="400"></p>

##### *Enter To Win Page*
* A link has been placed at the top of all other pages and in the dropdown menu to access the Enter To Win Page.

* An entry form has been designed asking for basic information with the chance to win a season pass of their choice.

* Using the EmailJS API, the entrant's information will be sent into my inbox.

* JavaScript and Jquery functions have been put in place to make the form hide and a "Good Luck!" message upon submission to ensure there aren't multiple entries.

<p align="center"><img src="/assets/images/contest.png" width="400"></p>

<p align="center"><img src="/assets/images/contestComplete.png" width="400"></p>

### Wireframes
* All wireframes can be found [HERE.](https://github.com/RyanRayn/Milestone-2/tree/master/documents/wireframes)

***

## **Features**

* Responsive on all devices.
* Interactive Google Map API.
* Functioning EmailJS API.

***

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
7. [EmailJS](https://www.emailjs.com/) 
   * The EmailJS API was used for the contest submission form.
8. [Git:](https://git-scm.com/)
   * Git was used for version control by utilizing the Gitpod terminal to commit to Git and push to Github.
9. [GitHub:](https://github.com/)  
   * GitHub is used to store the project code after being pushed from Git.
10. [Balsamiq:](https://balsamiq.com/)
    * Balsamiq was used to create the wireframes during the design process. 

***

## **Testing**

   * The W3C Markup Validator, W3C CSS Validator Services, and JS Hint were used to validate every page of the project to ensure there were no syntax errors in the project.

   * All testing validation can be seen [HERE.](https://github.com/RyanRayn/Milestone-2/tree/master/documents/testing) 

### Testing User Stories from UX Section
**First Time Visitor Goals**
1. As a first time user, I would like to easily understand the purpose of the site.
   * Upon entering, users are greeted with an eye-grabbing hero image of a skier on a mountain. To the left of the skier is a large header and subheader with the name of the site and a one-line description explaining the purpose of the site.

   * The background image of the skier immediately lets the user know the website has to do with skiing/snow sports.

   * The header and subheading next to the skier tell the exact purpose of the site.
   <p align="center"><img src="/assets/images/desktop2.png" width="400"></p> 
  
2. As a first time user, I would like to easily navigate through the site's content.

   * When arriving at the site, the user has several options. In the top corner is a hamburger menu icon that navigates around the site.

   * In the bottom corner of the hero image is a strategically placed call to action link that will bring visitors to the maps page.

   * Users can also scroll down for more content and another large button that will bring them to the information page to find out more.

   * Each page has a dropdown menu that navigates the site in the same convenient location.

   * Due to the length of the info page, I have placed a "scroll to top" button that will automatically bring you to the top menu when pressed.

   * A button leading to the maps page has also been placed at the bottom of the info page for easy access.
   <p align="center"><img src="/assets/images/navigation.png" width="400"></p>
   <p align="center"><img src="/assets/images/navigation2.png" width="400"></p>
   <p align="center"><img src="/assets/images/navigation3.png" width="400"></p>

3. As a first time user, I would like to easily access the website for each resort and season pass for more information.

   * On the maps page, each location has an infobox connected to its marker when clicked. The marker contains a link to that resort's website.
   <p align="center"><img src="/assets/images/infobox.png" width="400"></p>

   * On desktop view, when a passes locations are shown on the map a container pops up underneath with a list of all resorts that pass offers. Each line item is an active link to that mountain's website.
   <p align="center"><img src="/assets/images/resortlinks.png" width="400"></p>

   * On the information comparison page, an active link has been placed on each mountain name every time it is mentioned.

**Returning Visitors**

1. As a returning visitor, I would like to see up to date information on mountains and prices.
   * In the footer of each page are links to our social media accounts as well as a callout to follow us for up to date information and sales.

**Frequent Visitors**

1. As a frequent visitor, I would like easy access to the site's social media accounts.
   * Icons that link to our social media accounts are placed in the footer of each page as well as in the dropdown menu for constant reminders to follow.

2. As a frequent visitor, I would like social media accounts to be up to date with current promotions.
   * Social media accounts will be continuously updated with new information and sales.

### Further Testing

* The website was tested on Safari, Google Chrome, and Firefox browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPad, iPhone 8, iPhone X, and Samsung devices.
* All the links on every page were tested on all browsers to ensure they are working properly.
* Friends and family members were recruited to play on the site and inform me of any changes they felt needed to be made.

### Known Bugs

* On some iOS devices "over-scrolling" occurs. When the bottom of the page is reached and the user continues pulling the screen to scroll down it will eventually go past the footer into white space.

***

## **Deployment**

The project was deployed to GitHub Pages using the following steps...
1. Log in to GitHub and locate the GitHub Repository.
2. At the top of the repository, locate the "settings" button on the menu.
3. Scroll down the settings page until you locate the "GitHub Pages" section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

***

## **Credits**

### Code

* [Bootstrap 4.5.0](https://getbootstrap.com/) and [Bootstrap Flex:](https://getbootstrap.com/docs/4.0/utilities/flex/) The Bootstrap libraries were used throughout the project mainly to make the site responsive using the Bootstrap Grid System.

* Aaron Sinnott (Mentor): My mentor Aaron Sinnott helped with the JavaScript coding for the Google Maps markers.

* Stephen (Tutor Support): Stephen helped with explaining and structuring the initial JavaScript code to push the Google Map markers onto the map.

* [Stack Overflow:](https://stackoverflow.com/) Stack was used as coding support throughout the entire project.

* [W3schools.com:](https://www.w3schools.com/) W3 was a great resource for random rules and code while working on this project.

### Content

* All content was written by the developer.

### Media

* All photos for this project were found using [iStock.](https://www.istockphoto.com/)

### Acknowledgements 

* My amazing mentor, Aaron Sinnott for his continuous feedback and support.

* Tutor support at Code Institute for all their efforts, helpfulness, and friendliness.
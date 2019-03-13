
# Basic SPA Analytics Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  It does not provide for the following: 
* authentication (amplify, cognito)
* user session
* paywall
* redux


# Modifications to `create-react-app`

Install the following npm modules

* react-bootstrap  - provides bootstrap's javascript file as a module, this makes it possible to require it using browserify, which is the most likely use case.  Browserify takes care of including this file for you.
* react-router-dom  - router bindings as spa's need client side routing
* react-router-bootstrap  - works with React Router and React Bootstrap, it can wrap around your Navbar links and use the React Router to route your app to the required link without refreshing the browser.


Styling changes

* icon creation for all browser / devices
* google fonts
* support mobile browser 


Routing changes

* links for pages
* links for 404 - not found



# Project Structure (Frontend within demo)

/src/containers - pages
/src/App.js - navigation bar and frame for pages
/src/routes.js - routing



# Check Services








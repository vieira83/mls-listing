# Real Estate Listing

### Description
The real estate listing app lists real estates houses with details obtnaied from the simplyreets trial test api. Every MLS list can be saved to firebase database under the mlsid with the userId . When the App loads inside the main component (App) we initialize firebase and get a the user from localStorage or set a new one.  

The  React Real Estate Listing project is structured:
- **components**: Contains all stateless components.
- **containers**: class or smart components. Every component or container has it’s own folder.
- **shared folder** : contains reusable utils and functions such API, Auth and local storage.
The Api is object literal containing a generic getAll method to fetch data for url. 
- **Services**:  contains services to get data from an api endpoint. the simplyReets service gets the all properties data.
- **config**: configurations files such as firebase config.

-  **CSS** :
Follows basic BEM format for styling, App_component__modifier (ex: App_header__darker). There's not an extensive amount of styling so all the styles are in App.css and no need for a css preprocessor as well. In the App.css the styles are grouped by component with a comment at the beginning identifying the session. This makes it easy to move blocks o styling to their own component css style if needed.

## Setup
Clone the app
``` git clone https://github.com/vieira83/mls-listing.git ```

### Install dependecencies
`npm install`


### To run the app:

 `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

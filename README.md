# Magic: The Gathering Cards 

A potal that allows individulas to discover different Magic: The Gathering cards of creature type. <br/>
Uses an open source API to display a list of cards that can be sorted and searched upon. <br/>
API Location: [https://api.magicthegathering.io/v1/cards](https://api.magicthegathering.io/v1/cards) <br/>

The Creature Cards can be sorted and searched by: 
  - Card Name
  - Set Name
  - Artist
  - All

The default display shows the first 20 creature cards returned from the API and then allows more cards to appear when scrolling. 

### To Do:
    - Implement Infinity Scroll
    - Figure out how to access next 50 cards on desired page from API
    - Fix searching results showing duplicates/non-related cards

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

If looking to run this app locally, first clone the repository, cd into the repo, run `yarn`, then run `yarn start` <br/>
This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

// Shows the total number of cards loaded into the deck
export const NumLoadedResults = ({ filteredLength, selectedSearch, userInput, loading }) => {
    console.log(selectedSearch)
    if (loading === true) {
      return '';
    } else if (userInput === '' && (selectedSearch === 'all' || selectedSearch === null)) {
      return filteredLength + ' Total Cards Loaded';
    } else if (filteredLength === 0) {
      return 'No Results';
    } else if (filteredLength === 1) {
      return filteredLength + ' Result';
    } else {
      return filteredLength + ' Results';
    }
};

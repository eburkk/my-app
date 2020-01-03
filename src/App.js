import React, { useEffect, useState } from "react";
import { Alert } from "fundamental-react/Alert";
import { ClipLoader } from "react-spinners";
import { CardLayout } from "./components/CardLayout";
import { CardSearchBar } from "./components/CardSearchBar";
import { Icon } from "fundamental-react/Icon";
import { SearchDropdown } from "./components/SearchDropdown";
import { useRoute } from "wouter";
import FuzzySearch from "fuzzy-search";
import "./App.css";

// Creates searcher depending on what user wants to sort by
function createSearcher(params, creatureCards) {
  const allSearcher = new FuzzySearch(creatureCards.cards, [
    "name",
    "artist",
    "setName"
  ]);

  if (!params) {
    return allSearcher;
  } else {
    switch (params.selectedSearch) {
      case "cardName": {
        const cardNameSearcher = new FuzzySearch(creatureCards.cards, ["name"]);
        return cardNameSearcher;
      }
      case "set": {
        const setNameSearcher = new FuzzySearch(creatureCards.cards, [
          "setName"
        ]);
        return setNameSearcher;
      }
      case "artist": {
        const artistSearcher = new FuzzySearch(creatureCards.cards, ["artist"]);
        return artistSearcher;
      }
      default:
        return allSearcher;
    }
  }
}

function App() {
  const [userInput, updateUserInput] = useState("");
  const [creatureCards, setCreatureCards] = useState(null);
  const [error, setError] = useState();
  const [match, params] = useRoute("localhost:3000/:selectedSearch?");
  const [loading, setLoading] = useState(true);
  let filteredData = [];
  const pageNum = 1;

  // Allows pagination
  const magicTheGatheringCardsAPI = `https://api.magicthegathering.io/v1/cards?
      type=creature&pageSize=20&page=${pageNum}&orderBy=name`;

  // Fetches initial 20 creature cards
  useEffect(() => {
    fetch(magicTheGatheringCardsAPI)
      .then(response => response.json())
      .then(json => {
        setCreatureCards(json);
        setLoading(false);
      })
      .catch(error => setError(error.message));
  }, []);

  // Creates filtered data depending on what user sorts/searches by
  if (creatureCards === null) {
    filteredData = [];
  } else {
    const searcher = createSearcher(params, creatureCards);
    if (userInput === "") {
      filteredData = creatureCards.cards;
    } else {
      filteredData = searcher.search(userInput);
    }
  }

  return (
    <div className="App">
      <div id="root">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container">
              <div className="header content">
                <header>
                  <h1 className="title is-1">Magic: The Gathering Cards</h1>
                </header>
                <div className="searchComponent">
                  <SearchDropdown params={params} />
                  <CardSearchBar updateUserInput={updateUserInput} />
                  {console.log(filteredData)}
                </div>
                {error && (
                  <Alert
                    dismissible
                    type="error"
                    onCloseClicked={() => {
                      setError(undefined);
                    }}
                  >
                    <Icon glyph="message-error" />
                    {error}
                  </Alert>
                )}
              </div>
              {loading ? (
                <ClipLoader />
              ) : (
                <CardLayout
                  filteredData={filteredData}
                  loading={loading}
                  params={params}
                  userInput={userInput}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

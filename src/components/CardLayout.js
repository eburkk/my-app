/* Contruscts the overall layout of card display
    - 20 cards on initial page
    -slide in from left to right
    - infinity scroll
*/
import React, { useEffect, useState } from "react";
import { SingleCard } from "./SingleCard";
import { NumLoadedResults } from "./NumLoadedResults";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

export const CardLayout = ({
  filteredData,
  loading,
  params,
  userInput,
  searching
}) => {
  return (
    <div>
      <div className="numResults">
        <NumLoadedResults
          filteredLength={filteredData.length}
          selectedSearch={params && params.selectedSearch}
          userInput={userInput}
          loading={loading}
        />
      </div>
      {console.log(filteredData)}

      <div className="cards">
        {filteredData.map(card => {
          console.log(card);
          return <SingleCard key={card.number} card={card} />;
        })}
      </div>
    </div>
  );
};

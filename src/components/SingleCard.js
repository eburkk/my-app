import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

/* Card Specifics: 
- Each card should display:
     image, name, artist, set name, and original type.
- Card image should be displayed immediately
  - Not sure how to implement this */

export const SingleCard = ({ card }) => {
  return (
    <li id="slide" className="card">
      <img src={card.imageUrl} alt="No Image Available" height="231" width="310"/>
      <div className="cardHeader">{card.name}</div>
      <div>{card.artist}</div>
      <div>{card.setName}</div>
      <div>{(card.originalType && !card.type) || (!card.orginalType && card.type)}</div>
    </li>
  );
};

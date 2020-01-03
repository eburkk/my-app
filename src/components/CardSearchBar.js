import React from "react";
import SearchBar from "@opuscapita/react-searchbar";
import "../App.css";

// eslint-disable-next-line react/prop-types
export const CardSearchBar = ({ updateUserInput }) => {
  return (
    <SearchBar
      id="search"
      onSearch={searchText => {
        updateUserInput(searchText);
      }}
    />
  );
};

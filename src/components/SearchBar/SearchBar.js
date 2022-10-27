import React from "react";
import searchIcon from "../Images/searchIcon.svg";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchbar-wrapper">
      <input
        className="search-bar-input"
        type="text"
        pattern=".*\S.*"
        placeholder="Search..."
      />
      <img className="searchIcon" src={searchIcon} />
    </div>
  );
};

export default SearchBar;

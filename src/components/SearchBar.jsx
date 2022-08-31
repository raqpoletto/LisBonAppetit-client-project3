import React, { useState } from "react";

function SearchBar({ searchRestaurant }) {
  const [searchString, setSearchString] = useState("");

  const handleSearch = (e) => {
    setSearchString(e.target.value);
    searchRestaurant(e.target.value);
  };

  return (
    <div>
      <label for="search">
        <Searchbar /> Search
      </label>
      <input
        id="search"
        value={searchString}
        placeholder="Restaurant name"
        type="text"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;

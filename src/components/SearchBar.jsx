import React, { useState } from "react";

function SearchBar({ searchRestaurant }) {
  const [searchString, setSearchString] = useState("");

  const handleSearch = (e) => {
    setSearchString(e.target.value);
    searchRestaurant(e.target.value);
  };

  const searchRestaurants = (search) => {
    let filteredRestaurants = restaurants.filter((restaurant) => {
      const filteredName = restaurant.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const filteredTypeofFood = restaurant.typeOfFood
        .toLowerCase()
        .includes(search.toLowerCase());
      return filteredName || filteredTypeofFood;
    });
    setAllRestaurants(filteredRestaurants);
    console.log(restaurants);
  };

  return (
    <div>
      <label for="search">
        <SearchBar /> Search
      </label>
      <input
        id="search"
        value={searchString}
        placeholder="Restaurant name or type of food"
        type="text"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;

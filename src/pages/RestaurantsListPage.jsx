import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateRestaurant from "../components/CreateRestaurant";

function RestaurantsListPage() {
  const [restaurants, setRestaurants] = useState([]);
  /*   const [allRestaurants, setAllRestaurants] = useState([]);
  const [displayRestaurants, setDisplayRestaurants] = useState([]); */
  const getToken = localStorage.getItem("authToken");

  const getRestaurantList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/restaurant`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      console.log(response.data);
      setRestaurants(response.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  /* const searchRestaurants = (search) => {
    let filteredRestaurants = restaurants.filter((restaurant) => {
      const filteredName = restaurant.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return filteredName; */
  /* const filteredTypeOfCuisine = restaurant.typeOfCusine
        .toLowerCase()
        .includes(search.toLowerCase());
      return fiteredfilteredTypeOfCuisine; */
  /*    });
    setAllRestaurants(filteredRestaurants);
    console.log(restaurants);
  }; */

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <div>
      <CreateRestaurant getRestaurantList={getRestaurantList} />

      <h2>Restaurant List</h2>

      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <div key={restaurant._id}>
              <Link to={`/restaurants/${restaurant._id}`}>
                <h3>{restaurant.name}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantsListPage;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RestaurantsListPage() {
  const [restaurants, setRestaurants] = useState([]);
  const getToken = localStorage.getItem("authToken");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const { user } = useContext(AuthContext);

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

  const handleFavourites = async (userId, restaurantId) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/favourites`,
        { userId, restaurantId },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <div>
      {/* <SearchBar searchRestaurants={searchRestaurants} /> */}
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <div key={restaurant._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={restaurant.imageUrl} />
                <Card.Body>
                  <Card.Title>{restaurant.name}</Card.Title>
                  <Card.Text>{restaurant.description}</Card.Text>
                  <Button variant="danger">
                    <Link to={`/restaurants/${restaurant._id}`}>
                      {restaurant.name}
                    </Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleFavourites(user._id, restaurant._id)}
                  >
                    Favourites:
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantsListPage;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RestaurantDetailsPage() {
  const [restaurant, setRestaurant] = useState(null);
  const { restaurantId } = useParams();
  const { user } = useContext(AuthContext);
  const getToken = localStorage.getItem("authToken");

  const getRestaurant = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/restaurant/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      //console.log(response.data)
      setRestaurant(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /*  const handleFavourites = async (userId, restaurantId) => {
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
    } catch (err) {
      console.log(err);
    }
  }; */

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <div>
      {restaurant && (
        <div key={restaurant._id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={restaurant.imageUrl} />
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>{restaurant.description}</Card.Text>
              <Card.Text>{restaurant.address}</Card.Text>
              <Card.Text>{restaurant.contact}</Card.Text>
              <Card.Text>{restaurant.typeOfFood}</Card.Text>
              <Card.Text>{restaurant.averagePrice}</Card.Text>
              <Button variant="danger">
                <Link to={`/restaurant/edit/${restaurantId}`}>Edit</Link>
              </Button>

              <Link to="/restaurants">
                <button>See all Restaurants</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}
export default RestaurantDetailsPage;

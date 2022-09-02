import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RestaurantsListPage() {
  const [restaurants, setRestaurants] = useState([]);
  /*   const [allRestaurants, setAllRestaurants] = useState([]);
  const [displayRestaurants, setDisplayRestaurants] = useState([]); */
  const getToken = localStorage.getItem("authToken");
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
    } catch (err) {
      console.log(err);
    }
  };

  /* const searchRestaurants = (search) => {
    let filteredRestaurants = restaurants.filter((restaurant) => {
      const filteredName = restaurant.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return filteredName;
      return fiteredfilteredTypeOfCuisine; */
  /*    });
    setAllRestaurants(filteredRestaurants);
    console.log(restaurants);
  }; */

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <div className="allRestForm">
      <Row xs={2} md={3} className="g-4">
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Col>
                <Card
                  style={{ maxWidth: "95%" }}
                  key={restaurant._id}
                  className="shadow p-2 mb-1 bg-white rounded card h-100"
                >
                  <div className="imageSize">
                    <Card.Img
                      variant="top"
                      src={restaurant.imageUrl}
                      alt="restaurant"
                      className="photosize"
                    />
                  </div>
                  <Card.Body className="body-rest">
                    <Card.Title className="small">{restaurant.name}</Card.Title>

                    <div className="btns-admin">
                      <Link to={`/restaurants/${restaurant._id}`}>
                        <Button
                          style={{
                            fontSize: "0.8rem",
                            padding: "5px",
                            backgroundColor: "#068a9c",
                          }}
                          type="submit"
                          className="btn-admin remove-brd"
                        >
                          Details
                        </Button>
                      </Link>

                      <Link to={`/restaurants/edit/${restaurant._id}`}>
                        <Button
                          className="remove-brd"
                          style={{
                            fontSize: "0.8rem",
                            padding: "5px",
                            marginLeft: "2px",
                            backgroundColor: "#d44a1e",
                            width: "2.4rem",
                          }}
                          type="submit"
                        >
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default RestaurantsListPage;

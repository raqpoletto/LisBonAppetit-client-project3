import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <h1 className="title">Restaurant details</h1>
      <div className="detailsCard">
        <Card
          style={{ maxWidth: "90%" }}
          className="shadow p-2 mt-2 mb-1 bg-white rounded card h-100"
        >
          <Row className="g-0">
            {restaurant && (
              <>
                <Col md="4">
                  <Card.Img src={restaurant.imageUrl} alt="..." fluid />
                </Col>
                <Col md="8">
                  <Card.Body className="body-details-card">
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>{restaurant.description}</Card.Text>
                    <Card.Text>{restaurant.address}</Card.Text>
                    <Card.Text>{restaurant.contact}</Card.Text>
                    <Card.Text>{restaurant.typeOfFood}</Card.Text>
                    <Card.Text>{restaurant.averagePrice}</Card.Text>
                    <Button variant="outline-danger">
                      <Link to={`/restaurant/edit/${restaurantId}`}>
                        Edit Restaurant
                      </Link>
                    </Button>

                    <Link to="/restaurants">
                      <Button variant="outline-danger">
                        Back to Restaurants
                      </Button>
                    </Link>
                  </Card.Body>
                </Col>
              </>
            )}
          </Row>
        </Card>
      </div>
    </div>
  );
}
export default RestaurantDetailsPage;

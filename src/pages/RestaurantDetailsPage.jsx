import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function RestaurantDetailsPage() {
  const [restaurant, setRestaurant] = useState(null);
  const { restaurantId } = useParams();
  const { user } = useContext(AuthContext);

  const getRestaurant = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
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

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <div>
      <h1>teste</h1>
      {restaurant && (
        <>
          <img src={restaurant.imageUrl} />
          <h1>{restaurant.name}</h1>
          <p>{restaurant.description}</p>
          <h3>{restaurant.address}</h3>
          <h3>{restaurant.contact}</h3>
          <h3>Average price: {restaurant.averagePrice} €</h3>
        </>
      )}

      <Link to={`/restaurant/edit/${restaurantId}`}>
        <button>Edit Restaurant</button>
      </Link>

      <Link to="/restaurants">
        <button>See all Restaurants</button>
      </Link>
    </div>
  );
}
export default RestaurantDetailsPage;

/* return (
    <div className="RestaurantDetails">
        {restaurant && (
        <>
        <img src={restaurant.imageUrl} />
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
        <h3>{restaurant.address}</h3>
        <h3>{restaurant.contact}</h3> 
        <h3>Average price: {restaurant.averagePrice} €</h3>         
                    </>
                    )}
      </div>

      <Link to="/restaurants">
        <Button>See all Restaurants</Button>
      </Link>
    </div>
  );
} */

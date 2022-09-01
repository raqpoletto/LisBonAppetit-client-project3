import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Favourites() {
  const { user } = useContext(AuthContext);
  const [isFavourite, setIsFavourite] = useState(false);

  const getFavourite = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/profile/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      const userFavourites = response.data.favourites;

      if (userFavourites.some((item) => item._id === restaurantId)) {
        setIsFavourite(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async () => {
    try {
      const body = { userId: user._id, restaurantId: restaurantId };
      const getToken = localStorage.getItem("authToken");

      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/favourites`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      console.log(response.data);
      setIsFavourite(!isFavourite);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavourite();
  }, [isFavourite]);

  return (
    <div>
      <button className="favourite-btn" onClick={handleClick}>
        {isFavourite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}

export default Favourites;

import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [admin, setAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const [myComments, setMyComments] = useState(false);
  const [edit, setEdit] = useState(false);

  const toggleComments = () => {
    setMyComments(!myComments);
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const getUser = async () => {
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
      setCurrentUser(response.data);

      if (response.data.role === "admin") {
        setAdmin(true);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage(err.response.data.errorMessage);
    }
  };

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <div>
      {user && (
        <>
          <h1>Hello, {user.email}!</h1>
        </>
      )}

      {user && user.role === "user" && (
        <>
          <h2>❤️</h2> // i need a real heart button here
          {currentUser &&
            currentUser.favourites.map((restaurant) => {
              return (
                <div key={restaurant._id}>
                  <Link to={`/restaurant/${restaurant._id}`}>
                    <h3>{restaurant.name}</h3>
                  </Link>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}

export default ProfilePage;

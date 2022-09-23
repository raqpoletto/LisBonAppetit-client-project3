import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { AiFillHeart } from "react-icons/ai";
import { Button, Row, Col, Card } from "react-bootstrap";
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
    <main>
      <div>
        {user && (
          <>
            <h1 className="title" style={{ marginTop: "20px" }}>
              Hello, {user.name}!
            </h1>
            <img src={user.imageProfile} alt="profile" width="100px" />
            <h3>Edit your profile info?</h3>
          </>
        )}

        {user && user.role === "user" && (
          <>
            <h3 className="favourites-phrase" style={{ marginTop: "30px" }}>
              {" "}
              <AiFillHeart /> Your Favourites Restaurants
            </h3>

            <div className="">
              <Row xs={2} md={3} className="g-4 favouritesForm">
                {currentUser &&
                  currentUser.favourites.map((restaurant) => {
                    return (
                      <Col className="favouritesForm">
                        <Card
                          style={{ maxWidth: "90%" }}
                          key={restaurant._id}
                          className="shadow p-1 mb-1 bg-white rounded card h-100"
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
                            <Card.Title
                              as={Link}
                              to={`/restaurants/${restaurant._id}`}
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              <b>{restaurant.name}</b>
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default ProfilePage;

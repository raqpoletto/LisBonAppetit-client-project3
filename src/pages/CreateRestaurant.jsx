import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";

function CreateRestaurantPage({ getRestaurantList }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [contact, setContact] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [typeOfFood, setTypeOfFood] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleAveragePrice = (e) => setAveragePrice(e.target.value);
  const handleContact = (e) => setContact(e.target.value);
  const handleTypeOfFood = (e) => setTypeOfFood(e.target.value);

  const handleFileUpload = (e) => {
    setLoading(true);

    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
      .then((response) => {
        console.log(response.data.fileUrl);
        setImageUrl(response.data.fileUrl);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error while uploading the file: ", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) alert("Image still loading...");

    const newRestaurant = {
      name,
      description,
      address,
      contact,
      averagePrice,
      typeOfFood,
      imageUrl,
      user: user._id,
    };
    const storedToken = localStorage.getItem("authToken");
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/restaurant`, newRestaurant, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then(() => {
        getRestaurantList();
      });

    setName("");
    setDescription("");
    setAddress("");
    setContact("");
    setAveragePrice("");
    setTypeOfFood("");
    setImageUrl("");
    navigate("/restaurants");
  };

  return (
    <main>
      <h3 className="main-create-rest">Create a New Restaurant</h3>
      <div className="main-create-rest">
        <Form onSubmit={handleSubmit} className="create-rest">
          <Row className="mb-1">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleName}
                value={name}
                required
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="contact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={contact}
                placeholder="Enter number"
                onChange={handleContact}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-1" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              onChange={handleAddress}
              value={address}
              placeholder="123 Street "
            />
          </Form.Group>

          <Row className="mb-1">
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Average Price</Form.Label>
              <Form.Control
                onChange={handleAveragePrice}
                value={averagePrice}
                type="number"
                name="averagePrice"
                placeholder="€"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="typeOfFood">
              <Form.Label>Type of Food</Form.Label>
              <Form.Control
                onChange={handleTypeOfFood}
                value={typeOfFood}
                type="text"
                name="typeOfFood"
                placeholder="French, Portuguese, Chinese, etc"
              />
            </Form.Group>
          </Row>

          <Form.Group
            as={Col}
            className="mb-1"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={handleDescription} as="textarea" rows={2} />
          </Form.Group>

          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Add photo </Form.Label>
            <Form.Control
              type="file"
              size="sm"
              required
              onChange={(e) => handleFileUpload(e)}
            />
          </Form.Group>

          <Button
            className="remove-brd"
            style={{ backgroundColor: "#b54141" }}
            type="submit"
          >
            {loading ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              "Add"
            )}
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default CreateRestaurantPage;

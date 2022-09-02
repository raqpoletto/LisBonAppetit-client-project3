import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

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
      })
      .catch((err) => console.log(err));

    setName("");
    setDescription("");
    setAddress("");
    setContact("");
    setAveragePrice("");
    setTypeOfFood("");
    setImageUrl("");
  };

  return (
    <div>
      <h3>Create a New Restaurant</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" value={name} onChange={handleName} />
        </label>

        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
        </label>

        <label htmlFor="address">
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleAddress}
          />
        </label>

        <label htmlFor="contact">
          Contact:
          <input
            type="text"
            name="contact"
            value={contact}
            onChange={handleContact}
          />
        </label>

        <label htmlFor="averagePrice">
          Average Price:
          <input
            type="number"
            name="averagePrice"
            value={averagePrice}
            placeholder="€"
            onChange={handleAveragePrice}
          />
        </label>

        <label htmlFor="typeOfFood">
          Type of Food:
          <input
            type="text"
            name="typeOfFood"
            value={typeOfFood}
            placeholder="Italian, French, etc."
            onChange={handleTypeOfFood}
          />
        </label>

        <label htmlFor="image">
          Image:
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={(e) => handleFileUpload(e)}
          />
        </label>

        <button type="submit">Create Restaurant</button>
      </form>
    </div>
  );
}

export default CreateRestaurantPage;

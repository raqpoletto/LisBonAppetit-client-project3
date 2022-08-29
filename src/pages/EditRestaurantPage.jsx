import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function EditRestaurantPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [contact, setContact] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getRestaurantList = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/restaurants/${id}`,
        { headers: { Authorization: `Bearer ${getToken}` } }
      );

      setName(response.data.name);
      setDescription(response.data.description);
      setAddress(response.data.address);
      setContact(response.data.contact);
      setAveragePrice(response.data.averagePrice);
      setImageUrl(response.data.imageUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRestaurant = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/restaurants/${id}`,
        { headers: { Authorization: `Bearer ${getToken}` } }
      );
      navigate("/restaurant");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleAveragePrice = (e) => setAveragePrice(e.target.value);
  const handleContact = (e) => setContact(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const editRestaurant = {
        name: name,
        description: description,
        address: address,
        averagePrice: averagePrice,
        contact: contact,
        imageUrl: imageUrl,
      };

      const getToken = localStorage.getItem("authToken");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/restaurants/${id}`,
        editRestaurant,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      setName("");
      setDescription("");
      setAddress("");
      setContact("");
      setAveragePrice("");
      setImageUrl("");

      navigate(`/restaurants/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Edit Restaurant</h3>

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

        <label htmlFor="image">
          Image:
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={(e) => handleImageUrl(e)}
          />
        </label>

        <button type="submit">Edit Restaurant</button>

        <button onClick={deleteRestaurant}>Delete Restaurant</button>
      </form>
    </div>
  );
}
export default EditRestaurantPage;

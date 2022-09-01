import { useState, useEffect, useContext } from "react";
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
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleAveragePrice = (e) => setAveragePrice(e.target.value);
  const handleContact = (e) => setContact(e.target.value);

  const handleFileUpload = (e) => {
    setLoading(true);

    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
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

  const getRestaurantList = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/restaurant/${restaurantId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
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

  useEffect(() => {
    getRestaurantList();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loading) alert("Image still loading...");

    const editRestaurant = {
      name,
      description,
      address,
      averagePrice,
      contact,
      imageUrl,
      user: user._id,
    };

    const storedToken = localStorage.getItem("authToken");
    axios.put(
      `${process.env.REACT_APP_API_URL}/api/restaurant/${restaurantId}`,
      editRestaurant,
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    );

    setName("");
    setDescription("");
    setAddress("");
    setContact("");
    setAveragePrice("");
    setImageUrl("");
    navigate(`/restaurants/${restaurantId}`);
  };
  const deleteRestaurant = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/restaurant/${restaurantId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        navigate("/restaurants");
      })
      .catch((err) => console.log(err));
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
          <textarea
            name="description"
            type="text"
            value={description}
            cols="30"
            rows="10"
            onChange={handleDescription}
          ></textarea>
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
            onChange={(e) => handleFileUpload(e)}
          />
        </label>

        <button
          className="btn btn-outline-primary me-2"
          onClick={EditRestaurantPage}
        >
          Edit Restaurant
        </button>

        <button onClick={deleteRestaurant}>Delete Restaurant</button>
      </form>
    </div>
  );
}
export default EditRestaurantPage;

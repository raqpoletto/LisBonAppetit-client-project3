import { useState } from "react";
import axios from "axios";
import { Form, Button, InputGroup, Spinner } from "react-bootstrap";

function AddComment(props) {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleContent = (e) => setContent(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);

  const handleFileUpload = async (e) => {
    try {
      const uploadData = new FormData();

      uploadData.append("imageUrl", e.target.files[0]);

      const getToken = localStorage.getItem("authToken");

      setIsUploading(true);

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/api/upload`,
        uploadData,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      setImageUrl(response.data.fileUrl);
      setIsUploading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (isUploading) return;

      const { restaurantId } = props;

      // Create an object representing the body of the POST request
      let body;

      if (imageUrl === "") {
        body = { content, restaurant: restaurantId };
      } else {
        body = { content, imageUrl, restaurant: restaurantId };
      }

      const getToken = localStorage.getItem("authToken");

      const createdCommment = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/api/restaurants/comments`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setContent("");
      setImageUrl("");
      props.refreshRestaurant();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={content}
            required
            onChange={handleContent}
            rows={3}
          />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label className="text-muted ">Add photo (optional)</Form.Label>
          <Form.Control
            type="file"
            size="sm"
            name="imageUrl"
            onChange={(e) => handleFileUpload(e)}
          />
        </Form.Group>

        <Button
          className="remove-brd"
          style={{ backgroundColor: "#068a9c" }}
          type="submit"
        >
          {isUploading ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            "Add"
          )}
        </Button>
      </Form>
    </div>
  );
}

export default AddComment;

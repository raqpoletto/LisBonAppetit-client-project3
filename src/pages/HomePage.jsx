import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function HomePage() {
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-danger">Search</Button>
      </Form>
    </div>
  );
}

export default HomePage;

import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

/* const API_URL = "http://localhost:5005"; */

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="name">Name</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your email here"
            value={email}
            onChange={handleEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>

        {errorMessage && <p>{errorMessage}</p>}
        <div className="alreadySignup">
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </Form>
    </div>
  );
}

export default LoginPage;

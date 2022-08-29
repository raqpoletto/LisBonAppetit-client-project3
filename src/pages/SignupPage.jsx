import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

/* const API_URL = "http://localhost:5005"; */

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, name, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <section>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="username"
            value={name}
            onChange={handleName}
            placeholder="Your name here"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />

          <button type="submit">Sign up</button>
        </form>

        {errorMessage && <p>{errorMessage}</p>}

        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </section>
    </div>
  );
}

export default SignupPage;

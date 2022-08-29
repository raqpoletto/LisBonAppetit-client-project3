import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { loggedIn, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (loading) return <p>Cooking...</p>;

  if (!loggedIn) {
    return navigate("/login");
  } else {
    return children;
  }
}

export default IsPrivate;

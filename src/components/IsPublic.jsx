import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function IsPublic({ children }) {
  const { loggedIn, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (loading) return <p>Cooking...</p>;

  if (!loggedIn) {
    return children;
  } else {
    return navigate("/");
  }
}

export default IsPublic;

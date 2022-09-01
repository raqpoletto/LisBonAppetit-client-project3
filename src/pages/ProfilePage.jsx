import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Favourites from "../components/Favourites";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && (
        <div>
          <img src={user.profilePicture} alt="profile picture" />
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <Favourites />
        </div>
      )}
    </>
  );
}

export default ProfilePage;

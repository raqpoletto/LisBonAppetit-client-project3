import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      {loggedIn && (
        <>
          <Link to="/">
            <button>Home</button>
          </Link>
          <span>Hello {user}</span>
          <button onClick={logout}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <Navbar bg="transparent">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src="https://res.cloudinary.com/poletto/image/upload/v1662057879/Restaurants/Captura_de_Tela_2022-09-01_a%CC%80s_18.33.45_yhopnk.png"
            style={{ marginLeft: "10px" }}
            width="300px"
            alt="logo"
          />
        </Navbar.Brand>

        <Nav className="justify-content-end">
          {loggedIn && (
            <>
              <Nav.Link href="/restaurants">All Restaurants</Nav.Link>
              <Nav.Link href="/restaurants/create">
                Create New Restaurant
              </Nav.Link>
              <Nav.Link href="/restaurant/edit/:restaurantId">
                Edit Restaurant
              </Nav.Link>
              <Nav.Link href="/profile">
                <img
                  src={user.imageProfile}
                  alt="..."
                  width="32"
                  height="40"
                  className="rounded-circle"
                />
              </Nav.Link>
              <Nav.Link
                variant="outline-danger"
                href="/profile"
                onClick={() => logout()}
              >
                Logout
              </Nav.Link>
            </>
          )}

          {!loggedIn && (
            <div>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

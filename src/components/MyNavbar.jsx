import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function MyNavbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src="https://res.cloudinary.com/poletto/image/upload/v1662057879/Restaurants/Captura_de_Tela_2022-09-01_a%CC%80s_18.33.45_yhopnk.png"
            style={{ marginLeft: "10px" }}
            width="300px"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto user-logged">
            {loggedIn && (
              <>
                <Nav.Link href="/restaurants">All Restaurants</Nav.Link>
                <Nav.Link href="/restaurants/create">
                  Add New Restaurant
                </Nav.Link>
                <Nav.Link href="/restaurant/edit/:restaurantId">
                  Update Restaurant
                </Nav.Link>
                <NavDropdown
                  title={`Hello, ${user.name}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="Logout">
                    <Nav.Link
                      variant="outline-danger"
                      href="/profile"
                      onClick={() => logout()}
                    >
                      Logout
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>

        {!loggedIn && (
          <div className="col-md-3 text-end">
            <Link to="/signup">
              <Button variant="outline-danger">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline-danger">Login</Button>
            </Link>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

{
  /* <Navbar bg="transparent">
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
            <div className="col-md-3 text-end">
              <Link to="/signup">
                <Button variant="outline-danger">Sign Up</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline-danger">Login</Button>
              </Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar> */
}

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function MyNavbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <Navbar
      sticky="top"
      variant="light"
      bg="light"
      expand={"sm" | "md" | "lg" | "xl" | "xxl"}
    >
      <Container fluid>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h1>what the fork is for dinner???</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              {loggedIn && (
                <>
                  <Nav.Link href="/restaurants">All Restaurants</Nav.Link>

                  <NavDropdown title="Options" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/restaurants/create">
                      Create Restaurant
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/restaurant/edit/:restaurantId">
                      Edit Restaurant
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action/3.4">
                      <Button variant="danger" onClick={() => logout()}>
                        Logout
                      </Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <span>Hello, {user.email}</span>
                </>
              )}
            </Nav>
          </Navbar.Collapse>

          {!loggedIn && (
            <div className="col-md-3 text-end">
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

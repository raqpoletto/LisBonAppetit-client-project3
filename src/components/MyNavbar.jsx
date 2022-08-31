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

{
  /* <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
 */
}

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const navStyle = {
    textDecoration: "none",
    color: "#9D9794",
    margin: "0 20px",
  };
  const activeSty = {
    color: "#0182CF",
    fontWeight: "bold",
  };

  const { user, logout } = useAuth();
  
  return (
    <div className="header d-flex align-items-center bg-white p-3 justify-content-between px-5">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand to="/home">Florida Medi Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="topnavbar me-auto">
              <NavLink style={navStyle} activeStyle={activeSty} to="/home">
                Home
              </NavLink>
              <NavLink style={navStyle} activeStyle={activeSty} to="/services">
                Services
              </NavLink>
              <NavLink style={navStyle} activeStyle={activeSty} to="/book">
                Book An Appointment
              </NavLink>
              <NavLink style={navStyle} activeStyle={activeSty} to="/donate">
                Donate Us
              </NavLink>

                <NavLink style={navStyle} activeStyle={activeSty} to="/signup">
                  Log In or Register
                </NavLink>

              <span>{user?.displayName} </span>
              {user?.displayName && <button onClick={logout}>log out</button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React, { Component } from "react";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  NavDropdown
} from "react-bootstrap";
import "./nav.css";

import { Link } from "react-router-dom";
class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" expand="lg" style={{ height: "80px" }}>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto new">
              <Nav.Link as={Link} to={"/home"}>
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                ABOUT US
              </Nav.Link>
              <Nav.Link as={Link} to={"/jobs"}>
                JOBS
              </Nav.Link>
              <Nav.Link as={Link} to={"/home"}>
                CLIENTS
              </Nav.Link>
              <Nav.Link as={Link} to={"/home"}>
                EMPLOYEES
              </Nav.Link>
              <Nav.Link as={Link} to={"/home"}>
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Demo;

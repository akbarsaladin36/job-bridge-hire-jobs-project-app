import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import myStyle from "./navbar.module.css";
import "../../App.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <Container className="py-2">
          <Navbar expand="lg" bg="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Navbar.Brand href="#home">Job Bridge</Navbar.Brand>
              </Nav>
              <Nav className={`${myStyle.right_navbar} pt-1`}>
                <Nav.Link href="#home">Daftar</Nav.Link>
                <Nav.Link href="#home">Masuk</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default NavBar;

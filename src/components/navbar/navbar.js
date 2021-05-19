import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import myStyle from "./navbar.module.css";
import "../../App.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          expand="lg"
          className={`d-none d-sm-block ${myStyle.whiteBackground}`}
        >
          <Container className="py-2">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Navbar.Brand href="#home" className="">
                  <span className={myStyle.jobBridgeColor}>Job Bridge</span>
                </Navbar.Brand>
              </Nav>
              <Nav inline>
                <button
                  type="button"
                  className={`${myStyle.purpleButtonOutline}`}
                >
                  Masuk
                </button>
                <button type="button" className={`${myStyle.purpleButton}`}>
                  Log In
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;

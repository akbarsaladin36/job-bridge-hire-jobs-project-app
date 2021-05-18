import React, { Component } from "react";
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";
import myStyle from "./navbar.module.css";
import logo from "../../assets/smallicons/logo-job-bridge.png";

class NavBar extends Component {
  render() {
    return (
      <>
        <Container fluid className={myStyle.container}>
          <Navbar
            expand="lg"
            className={`d-none d-sm-block ${myStyle.whiteBackground}`}
          >
            <Container className={`${myStyle.containerNavbar} py-2`}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Navbar.Brand href="#home" className="">
                    <Image src={logo} className={myStyle.jobBridgeColor} />
                  </Navbar.Brand>
                </Nav>
                <Nav inline>
                  <Button
                    variant="fff"
                    className={`${myStyle.purpleButtonOutline}`}
                  >
                    Masuk
                  </Button>
                  <Button variant="fff" className={`${myStyle.purpleButton}`}>
                    Log In
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default NavBar;

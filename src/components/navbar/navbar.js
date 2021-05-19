import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Image,
  Dropdown,
} from "react-bootstrap";
import myStyle from "./Navbar.module.css";
import logo from "../../assets/smallicons/logo-job-bridge.png";
import imgProfile from "../../assets/smallicons/profile-navbar.png";
import bell from "../../assets/smallicons/bell.png";
import mail from "../../assets/smallicons/mail.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      user: false,
    };
  }
  render() {
    const { login, user } = this.state;
    return (
      <>
        <Container fluid className={myStyle.container}>
          <Navbar expand="lg" className={`${myStyle.whiteBackground}`}>
            <Container className={`${myStyle.containerNavbar} py-2`}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Navbar.Brand href="#home" className="">
                    <Image src={logo} className={myStyle.jobBridgeColor} />
                  </Navbar.Brand>
                </Nav>
                {login === false ? (
                  <Nav>
                    <Button
                      variant="fff"
                      className={`${myStyle.purpleButtonOutline}`}
                    >
                      Masuk
                    </Button>
                    <Button variant="fff" className={`${myStyle.purpleButton}`}>
                      Daftar
                    </Button>
                  </Nav>
                ) : user === false ? (
                  <Nav>
                    <Button variant="fff" className={`${myStyle.purpleButton}`}>
                      Profile
                    </Button>
                  </Nav>
                ) : (
                  <Nav>
                    <Dropdown className={myStyle.dropdown}>
                      <Dropdown.Toggle
                        variant="#fff"
                        title="sort"
                        id="dropdown-basic"
                        className={myStyle.titleSort}
                      >
                        <Image src={bell} className={myStyle.bell} />
                        <p className={myStyle.handleResponsive}>
                          Notifications
                        </p>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className={myStyle.menuDropdown}>
                        <Dropdown.Item className={myStyle.listSort}>
                          Pemberitahuan 1
                        </Dropdown.Item>
                        <Dropdown.Item className={myStyle.listSort}>
                          Pemberitahuan 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className={myStyle.dropdown}>
                      <Dropdown.Toggle
                        variant="#fff"
                        title="sort"
                        id="dropdown-basic"
                        className={myStyle.titleSort}
                      >
                        <Image src={mail} className={myStyle.mail} />
                        <p className={myStyle.handleResponsive}>Messages</p>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className={myStyle.menuDropdown}>
                        <Dropdown.Item className={myStyle.listSort}>
                          Mail 1
                        </Dropdown.Item>
                        <Dropdown.Item className={myStyle.listSort}>
                          Mail 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className={myStyle.dropdown}>
                      <Dropdown.Toggle
                        variant="#fff"
                        title="sort"
                        id="dropdown-basic"
                        className={myStyle.titleSort}
                      >
                        <Image
                          src={imgProfile}
                          className={myStyle.imgProfile}
                        />
                        <p className={myStyle.handleResponsive}>Profile</p>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className={myStyle.menuDropdown}>
                        <Dropdown.Item className={myStyle.listSort}>
                          My Profile
                        </Dropdown.Item>
                        <Dropdown.Item className={myStyle.listSort}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default NavBar;

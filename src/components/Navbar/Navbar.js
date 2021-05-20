import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Image,
  Dropdown,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import myStyle from "./Navbar.module.css";
import logo from "../../assets/smallicons/logo-job-bridge.png";
import imgProfile from "../../assets/smallicons/profile-navbar.png";
import bell from "../../assets/smallicons/bell.png";
import mail from "../../assets/smallicons/mail.png";
import chat from "../../assets/img/chat.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      user: false,
      roleUser: 0,
    };
  }
  render() {
    const { login, user, roleUser } = this.state;
    return (
      <>
        <Container fluid className={`${myStyle.container} shadow`}>
          <Navbar expand="lg" className={`${myStyle.whiteBackground}`}>
            <Container className={`${myStyle.containerNavbar} py-2`}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  {login === false ? (
                    <Navbar.Brand as={Link} to="/">
                      <Image src={logo} className={myStyle.jobBridgeColor} />
                    </Navbar.Brand>
                  ) : (
                    <Navbar.Brand as={Link} to="/search-worker">
                      <Image src={logo} className={myStyle.jobBridgeColor} />
                    </Navbar.Brand>
                  )}
                </Nav>
                {login === false ? (
                  <Nav>
                    <Dropdown className={myStyle.dropdownDaftar}>
                      <Dropdown.Toggle
                        variant="#fff"
                        id="dropdown-basic"
                        className={myStyle.titleSortDaftar}
                      >
                        <Button
                          variant="fff"
                          className={`${myStyle.purpleButtonOutline}`}
                        >
                          Masuk
                        </Button>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className={myStyle.menuDropdownDaftar}>
                        <Dropdown.Item
                          as={Link}
                          to="/auth/worker/login"
                          className={myStyle.listSort}
                        >
                          Masuk Pekerja
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to="/auth/recruiter/login"
                          className={myStyle.listSort}
                        >
                          Masuk Perekrut
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={myStyle.dropdownDaftar}>
                      <Dropdown.Toggle
                        variant="#fff"
                        id="dropdown-basic"
                        className={myStyle.titleSortDaftar}
                      >
                        <Button
                          variant="fff"
                          className={`${myStyle.purpleButton}`}
                        >
                          Daftar
                        </Button>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className={myStyle.menuDropdownDaftar}>
                        <Dropdown.Item
                          as={Link}
                          to="/auth/worker/register"
                          className={myStyle.listSort}
                        >
                          Daftar Pekerja
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to="/auth/recruiter/register"
                          className={myStyle.listSort}
                        >
                          Daftar Perekrut
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav>
                ) : user === false ? (
                  <Nav>
                    {roleUser === 0 ? (
                      <Button
                        as={Link}
                        to="/jobbridge/profile-worker"
                        variant="fff"
                        className={`${myStyle.purpleButton}`}
                      >
                        Profile
                      </Button>
                    ) : (
                      <Button
                        as={Link}
                        to="/jobbridge/profile-recruiter"
                        variant="fff"
                        className={`${myStyle.purpleButton}`}
                      >
                        Profile
                      </Button>
                    )}
                  </Nav>
                ) : (
                  <Nav>
                    <Dropdown className={myStyle.dropdownNotification}>
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
                      <Dropdown.Menu
                        align="right"
                        className={myStyle.menuDropdownNotification}
                      >
                        <Row className={myStyle.rowNotification}>
                          <Image src={chat} className={myStyle.chat} />
                          <p className={myStyle.textChat}>
                            Belum ada notification
                          </p>
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown
                      as={Link}
                      to="/jobbridge/chat"
                      className={myStyle.dropdown}
                    >
                      <Dropdown.Toggle
                        variant="#fff"
                        title="sort"
                        id="dropdown-basic"
                        className={myStyle.titleSort}
                      >
                        <Image src={mail} className={myStyle.mail} />
                        <p className={myStyle.handleResponsive}>Messages</p>
                      </Dropdown.Toggle>
                    </Dropdown>
                    {roleUser === 0 ? (
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
                        <Dropdown.Menu
                          align="right"
                          className={myStyle.menuDropdown}
                        >
                          <Dropdown.Item
                            as={Link}
                            to="/jobbridge/profile-worker"
                            className={myStyle.listSort}
                          >
                            My Profile
                          </Dropdown.Item>
                          <Dropdown.Item
                            as={Link}
                            to="/jobbridge/edit-worker"
                            className={myStyle.listSort}
                          >
                            Edit Profile
                          </Dropdown.Item>
                          <Dropdown.Item className={myStyle.listSort}>
                            Change Password
                          </Dropdown.Item>
                          <Dropdown.Item className={myStyle.listSort}>
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
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
                        <Dropdown.Menu
                          align="right"
                          className={myStyle.menuDropdown}
                        >
                          <Dropdown.Item
                            as={Link}
                            to="/jobbridge/profile-recruiter"
                            className={myStyle.listSort}
                          >
                            My Profile
                          </Dropdown.Item>
                          <Dropdown.Item
                            as={Link}
                            to="/jobbridge/edit-recruiter"
                            className={myStyle.listSort}
                          >
                            Edit Profile
                          </Dropdown.Item>
                          <Dropdown.Item className={myStyle.listSort}>
                            Change Password
                          </Dropdown.Item>
                          <Dropdown.Item className={myStyle.listSort}>
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    )}
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

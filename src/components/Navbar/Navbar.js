import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDataWorker } from "../../redux/action/worker";
import { logout } from "../../redux/action/auth";
import { Container, Navbar, Nav, Image, Dropdown, Row } from "react-bootstrap";
import myStyle from "./Navbar.module.css";
import logo from "../../assets/smallicons/logo-job-bridge.png";
import imgProfile from "../../assets/img/img-not-found.png";
import bell from "../../assets/smallicons/bell.png";
import mail from "../../assets/smallicons/mail.png";
import chat from "../../assets/img/chat.png";

class NavBar extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  handleLogout = (params) => {
    // console.log(this.props);
    if (params) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  render() {
    const { login, roleUser } = this.props.auth;
    const company_image = this.props.auth.data
      ? this.props.auth.data.company_image
      : "";
    const { image_worker } = this.props.worker.biodata;
    const { logout } = this.props;
    // console.log(this.props);
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
                {login === false || !this.props.auth.data ? (
                  <Nav>
                    <Dropdown className={myStyle.dropdownDaftar}>
                      <Dropdown.Toggle
                        variant="#fff"
                        id="dropdown-basic"
                        className={myStyle.titleSortDaftar}
                      >
                        <p
                          variant="fff"
                          className={`${myStyle.purpleButtonOutline}`}
                        >
                          Masuk
                        </p>
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
                        <p variant="fff" className={`${myStyle.purpleButton}`}>
                          Daftar
                        </p>
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
                ) : (
                  <Nav>
                    <Dropdown className={myStyle.dropdownNotification}>
                      <Dropdown.Toggle
                        variant="#fff"
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
                          id="dropdown-basic"
                          className={myStyle.titleSort}
                        >
                          {image_worker === null ||
                          image_worker === "" ||
                          image_worker === undefined ? (
                            <Image
                              src={imgProfile}
                              className={myStyle.imgProfile}
                            />
                          ) : (
                            <Image
                              src={`${process.env.REACT_APP_IMAGE_URL}${image_worker}`}
                              className={myStyle.imgProfile}
                            />
                          )}

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
                          <Dropdown.Item
                            className={myStyle.listSort}
                            as={Link}
                            to="/worker/change-password"
                          >
                            Change Password
                          </Dropdown.Item>
                          <Dropdown.Item
                            className={myStyle.listSort}
                            // onClick={this.props.logout}
                            onClick={() => this.handleLogout(logout)}
                          >
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      <Dropdown className={myStyle.dropdown}>
                        <Dropdown.Toggle
                          variant="#fff"
                          id="dropdown-basic"
                          className={myStyle.titleSort}
                        >
                          {company_image !== null ||
                          company_image !== "" ||
                          company_image !== undefined ? (
                            <Image
                              src={`${process.env.REACT_APP_IMAGE_URL}${company_image}`}
                              className={myStyle.imgProfile}
                            />
                          ) : (
                            <Image
                              src={imgProfile}
                              className={myStyle.imgProfile}
                            />
                          )}
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
                          <Dropdown.Item
                            className={myStyle.listSort}
                            as={Link}
                            to="/jobbridge/change-password"
                          >
                            Change Password
                          </Dropdown.Item>
                          <Dropdown.Item
                            className={myStyle.listSort}
                            onClick={() => this.handleLogout(logout)}
                          >
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
const mapStateToProps = (state) => ({
  auth: state.auth,
  worker: state.worker,
});
const mapDispatchToProps = { logout, getDataWorker };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import myStyle from "./mobilefooter.module.css";
import firstMenu from "../img/smallicons/firstmenu.png";
import secondMenu from "../img/smallicons/secondmenu2.png";
import thirdMenu from "../img/smallicons/thirdmenu.png";
import fourthMenu from "../img/smallicons/fourthmenu.png";

class MobileNavBar extends Component {
  render() {
    return (
      <>
        <Container
          fluid
          className={`d-block d-sm-none ${myStyle.mobileFooterStyle}`}
        >
          <Row className="h-100">
            <Col lg={3} md={3} sm={3} xs={3} className="text-center my-auto">
              <img src={firstMenu} alt="" className="img-fluid"></img>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3} className="text-center my-auto">
              <img src={secondMenu} alt="" className="img-fluid"></img>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3} className="text-center my-auto">
              <img src={thirdMenu} alt="" className="img-fluid"></img>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3} className="text-center my-auto">
              <img src={fourthMenu} alt="" className="img-fluid"></img>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MobileNavBar;

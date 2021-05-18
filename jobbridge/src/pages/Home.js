import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import MobileFooter from "../components/mobilefooter/mobilefooter";
// import myStyle from "./home.module.css";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <h1>FRONT-END JOB BRIDGE</h1>
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
              LEFT
            </Col>
            <Col
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className="d-flex justify-content-end"
            ></Col>
          </Row>
        </Container>
        <Footer />
        <MobileFooter />
      </>
    );
  }
}

export default Home;

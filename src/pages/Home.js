import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myStyle from "./home.module.css";

class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <h1>FRONT-END JOB BRIDGE</h1>
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
              LEFT
            </Col>
            <Col>Right</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;

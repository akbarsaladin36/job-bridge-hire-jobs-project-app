import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myStyle from "./footer.module.css";

class Footer extends Component {
  render() {
    return (
      <>
        <Container
          fluid
          className={`${myStyle.purpleBackground} d-none d-sm-block`}
        >
          <Container className={`pt-5`}>
            <Row className="pt-1 mb-2">
              <Col lg={5} md={5} sm={5} xs={5} className={myStyle.zeroPadding}>
                <h3>Job Bridge</h3>
              </Col>
            </Row>
            <Row className={`pb-5`}>
              <Col
                lg={5}
                md={5}
                sm={5}
                xs={5}
                className={`${myStyle.zeroPadding}`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
              </Col>
            </Row>
            <Row className={`py-4 ${myStyle.topBorder}`}>
              <Col lg={6} md={6} sm={3} xs={3} className={myStyle.zeroPadding}>
                © 2020 Job Bridge. All rights reserved.
              </Col>
              <Col
                lg={6}
                md={6}
                sm={9}
                xs={9}
                className={`${myStyle.zeroPaddingRight}`}
              >
                <Row className="d-flex justify-content-end">
                  <Col lg={2} md={3} sm={4} xs={4} className="text-right">
                    Telepon
                  </Col>
                  <Col lg={2} md={3} sm={3} xs={4} className="text-right">
                    Email
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

export default Footer;

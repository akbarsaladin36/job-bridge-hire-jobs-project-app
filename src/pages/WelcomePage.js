import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import WelcomePageStyle from "./WelcomePageStyle.module.css";
import Image1 from "../../src/assets/img/left-column-image.jpg";
import ImageLogo1 from "../../src/assets/img/peword-white-logo.png";

class WelcomePage extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={WelcomePageStyle.left_background}>
              <img
                src={Image1}
                className={WelcomePageStyle.image_background}
                alt="job bridge background"
              />
              <img
                src={ImageLogo1}
                className={WelcomePageStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={WelcomePageStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
              <div className={WelcomePageStyle.button_position}>
                <Button className={`${WelcomePageStyle.sign_in_button} mt-2`}>
                  <b>Masuk sebagai pekerja</b>
                </Button>
                <p className={WelcomePageStyle.left_column_small_word}>Atau</p>
                <Button className={`${WelcomePageStyle.sign_in_button_2} mt-2`}>
                  <b>Masuk sebagai perekrut</b>
                </Button>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${WelcomePageStyle.right_column} mt-5 pt-5`}
            >
              <h2>Halo Pewpeople</h2>
              <p className="mt-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default WelcomePage;

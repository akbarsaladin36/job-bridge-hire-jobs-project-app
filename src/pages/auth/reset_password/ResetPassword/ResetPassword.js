import React, { Component } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import ResetPasswordStyle from "./ResetPasswordStyle.module.css";
import Image1 from "../../../../assets/img/left-column-image.jpg";
import ImageLogo1 from "../../../../assets/img/peword-white-logo.png";
import ImageLogo2 from "../../../../assets/img/peword-purple-logo.png";

class ResetPasswordPage extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={ResetPasswordStyle.left_background}>
              <img
                src={Image1}
                className={ResetPasswordStyle.image_background}
                alt="job bridge background"
              />
              <img
                src={ImageLogo1}
                className={ResetPasswordStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={ResetPasswordStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${ResetPasswordStyle.right_column} mt-5 pt-5`}
            >
              <img
                src={ImageLogo2}
                alt="peword logo"
                className={`${ResetPasswordStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Reset Password</h2>
              <p className="mt-3">
                Enter your user account's verified email address and we will
                send you a password reset link.
              </p>
              <Form className="mt-5">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    placeholder="Masukkan email"
                  />
                </Form.Group>
                <Button
                  className={`${ResetPasswordStyle.reset_password_button} mt-4`}
                >
                  Send password reset email
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ResetPasswordPage;

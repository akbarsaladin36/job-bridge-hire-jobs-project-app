import React, { Component } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import LoginAfterResetPasswordStyle from "./LoginAfterResetPasswordStyle.module.css";

class LoginAfterResetPasswordPage extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col
              lg={7}
              className={LoginAfterResetPasswordStyle.left_background}
            >
              <img
                src="../../assets/img/left-column-image.jpg"
                className={LoginAfterResetPasswordStyle.image_background}
                alt="job bridge background"
              />
              <img
                src="../../assets/img/peword-white-logo.png"
                className={LoginAfterResetPasswordStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1
                  className={LoginAfterResetPasswordStyle.job_bridge_brand_word}
                >
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${LoginAfterResetPasswordStyle.right_column} mt-5 pt-5`}
            >
              <img
                src="../../assets/img/peword-purple-logo.png"
                alt="peword logo"
                className={`${LoginAfterResetPasswordStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Reset Password</h2>
              <p className="mt-3">
                We have an email containing a password reset instruction to your
                email. Please check your email.
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
                <Form.Group className="mt-4">
                  <Form.Label>Kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="userPassword"
                    placeholder="Masukkan kata sandi"
                  />
                </Form.Group>
                <Button
                  className={`${LoginAfterResetPasswordStyle.reset_password_button} mt-4`}
                >
                  Reset password
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default LoginAfterResetPasswordPage;

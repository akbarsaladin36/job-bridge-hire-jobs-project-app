import React, { Component } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import ChangePasswordStyle from "./ChangePasswordStyle.module.css";

class ChangePasswordPage extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={ChangePasswordStyle.left_background}>
              <img
                src="/img/left-column-image.jpg"
                className={ChangePasswordStyle.image_background}
                alt="job bridge background"
              />
              <img
                src="/img/peword-white-logo.png"
                className={ChangePasswordStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={ChangePasswordStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${ChangePasswordStyle.right_column} mt-5 pt-5`}
            >
              <img
                src="/img/peword-purple-logo.png"
                alt="peword logo"
                className={`${ChangePasswordStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Reset Password</h2>
              <p className="mt-3">
                You need to change your password to activate your account.
              </p>
              <Form className="mt-5">
                <Form.Group>
                  <Form.Label>Kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="userPassword"
                    placeholder="Masukkan kata sandi"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="userPassword"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </Form.Group>
                <Button
                  className={`${ChangePasswordStyle.reset_password_button} mt-4`}
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

export default ChangePasswordPage;

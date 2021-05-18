import React, { Component } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginStyle from "./LoginStyle.module.css";

class LoginPage extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={LoginStyle.left_background}>
              <img
                src="../../assets/img/left-column-image.jpg"
                className={LoginStyle.image_background}
                alt="job bridge background"
              />
              <img
                src="../../assets/img/peword-white-logo.png"
                className={LoginStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={LoginStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col lg={4} className={`${LoginStyle.right_column} mt-5 pt-5`}>
              <img
                src="../../assets/img/peword-purple-logo.png"
                alt="peword logo"
                className={`${LoginStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Halo Pewpeople</h2>
              <p className="mt-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor
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
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="userPassword"
                    placeholder="Masukkan kata sandi"
                  />
                </Form.Group>
                <p className="float-end mt-3">Lupa kata sandi</p>
                <Button className={`${LoginStyle.sign_in_button} mt-2`}>
                  Masuk
                </Button>
              </Form>
              <p className="text-center mt-3">
                Anda belum punya akun?{" "}
                <Link
                  to="/auth/worker/register"
                  className={LoginStyle.daftar_disini_word}
                >
                  Daftar disini
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default LoginPage;

import React, { Component } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterRecruiterStyle from "./RegisterRecruiterStyle.module.css";

class RegisterRecruiterPage extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={RegisterRecruiterStyle.left_background}>
              <img
                src="/img/left-column-image.jpg"
                className={RegisterRecruiterStyle.image_background}
                alt="job bridge background"
              />
              <img
                src="/img/peword-white-logo.png"
                className={RegisterRecruiterStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={RegisterRecruiterStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${RegisterRecruiterStyle.right_column} mt-5 pt-5`}
            >
              <img
                src="/img/peword-purple-logo.png"
                alt="peword logo"
                className={`${RegisterRecruiterStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Halo Pewpeople</h2>
              <p className="mt-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor
              </p>
              <Form className="mt-5">
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="userFullName"
                    placeholder="Masukkan nama"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    placeholder="Masukkan alamat email"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    name="userCompany"
                    placeholder="Masukkan nama perusahaan"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Bidang Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    name="userCompanyFocus"
                    placeholder="Bidang perusahaan anda"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>No handphone</Form.Label>
                  <Form.Control
                    type="text"
                    name="userPhoneNumber"
                    placeholder="Masukkan no handphone"
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
                <Form.Group className="mt-4">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="userConfirmPassword"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </Form.Group>
                <Button
                  className={`${RegisterRecruiterStyle.register_button} mt-4`}
                >
                  Daftar
                </Button>
              </Form>
              <p className="text-center mt-3">
                Anda sudah punya akun?{" "}
                <Link
                  to="/auth/recruiter/login"
                  className={RegisterRecruiterStyle.masuk_disini_word}
                >
                  Masuk disini
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default RegisterRecruiterPage;

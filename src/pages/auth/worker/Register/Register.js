import React, { Component } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RegisterStyle from "./RegisterStyle.module.css";
import Image1 from "../../../../assets/img/left-column-image.jpg";
import ImageLogo1 from "../../../../assets/img/peword-white-logo.png";
import ImageLogo2 from "../../../../assets/img/peword-purple-logo.png";
import { registerWorker } from "../../../../redux/action/auth";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fullnameWorker: "",
        emailWorker: "",
        phoneNumberWorker: "",
        passwordWorker: "",
        confirmPasswordWorker: "",
      },
      hasError: false,
    };
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  submitData = (event) => {
    event.preventDefault();
    // console.log(this.props);
    const { passwordWorker, confirmPasswordWorker } = this.state.form;
    if (passwordWorker !== confirmPasswordWorker) {
      alert("Passwords don't match.");
    } else {
      // console.log(this.props);
      this.props
        .registerWorker({
          fullnameWorker: this.state.form.fullnameWorker,
          emailWorker: this.state.form.emailWorker,
          phoneNumberWorker: this.state.form.phoneNumberWorker,
          passwordWorker: confirmPasswordWorker,
        })
        .then((res) => {
          console.log(res);
          this.props.history.push("/auth/worker/login");
          alert("Register Worker sudah sukses. Silakan cek email anda.");
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  render() {
    const {
      fullnameWorker,
      emailWorker,
      phoneNumberWorker,
      passwordWorker,
      confirmPasswordWorker,
    } = this.state;
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={RegisterStyle.left_background}>
              <img
                src={Image1}
                className={RegisterStyle.image_background}
                alt="job bridge background"
              />
              <img
                src={ImageLogo1}
                className={RegisterStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={RegisterStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${RegisterStyle.right_column} mt-5 pt-5 ml-3`}
            >
              <img
                src={ImageLogo2}
                alt="peword logo"
                className={`${RegisterStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Halo Pewpeople</h2>
              <p className="mt-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor
              </p>
              <Form className="mt-5 ml-3" onSubmit={this.submitData}>
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullnameWorker"
                    placeholder="Masukkan nama"
                    value={fullnameWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="emailWorker"
                    placeholder="Masukkan alamat email"
                    value={emailWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>No handphone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumberWorker"
                    placeholder="Masukkan no handphone"
                    value={phoneNumberWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="passwordWorker"
                    placeholder="Masukkan kata sandi"
                    value={passwordWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPasswordWorker"
                    placeholder="Masukkan konfirmasi kata sandi"
                    value={confirmPasswordWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Button
                  className={`${RegisterStyle.register_button} mt-4`}
                  type="submit"
                >
                  Daftar
                </Button>
              </Form>
              <p className="text-center mt-3">
                Anda sudah punya akun?{" "}
                <Link
                  to="/auth/worker/login"
                  className={RegisterStyle.masuk_disini_word}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { registerWorker };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
